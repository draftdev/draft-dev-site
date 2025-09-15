// src/components/page-components/mega-guide/section-provider.tsx
'use client'

import { remToPx } from '@/components/page-components/mega-guide/remToPx'
import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { createStore, useStore, type StoreApi } from 'zustand'

export interface Section {
  id: string
  title: string
  offsetRem?: number
  tag?: string
  headingRef?: React.RefObject<HTMLHeadingElement | null>
}

interface SectionState {
  sections: Array<Section>
  visibleSections: Array<string>
  setVisibleSections: (visibleSections: Array<string>) => void
  registerHeading: (opts: {
    id: string
    ref: React.RefObject<HTMLHeadingElement | null>
    offsetRem: number
  }) => void
}

function createSectionStore(sections: Array<Section>) {
  return createStore<SectionState>()((set) => ({
    sections,
    visibleSections: [],
    setVisibleSections: (visibleSections) =>
      set((state) =>
        state.visibleSections.join() === visibleSections.join()
          ? {}
          : { visibleSections },
      ),
    registerHeading: ({ id, ref, offsetRem }) =>
      set((state) => ({
        sections: state.sections.map((s) =>
          s.id === id ? { ...s, headingRef: ref, offsetRem } : s,
        ),
      })),
  }))
}

// Helper to get the active scroll container
function getScrollContainer(): Window | HTMLElement {
  if (typeof window === 'undefined') return {} as unknown as Window
  const el = document.querySelector<HTMLElement>('[data-scroll-root]')
  return el ?? window
}

// Add this to your section-provider.tsx to debug

function useVisibleSections(sectionStore: StoreApi<SectionState>) {
  const setVisibleSections = useStore(sectionStore, (s) => s.setVisibleSections)
  const sections = useStore(sectionStore, (s) => s.sections)

  useEffect(() => {
    // Debug: Log sections when they change
    console.log(
      'Sections registered:',
      sections.map((s) => ({
        id: s.id,
        title: s.title,
        hasRef: !!s.headingRef,
      })),
    )
  }, [sections])

  useEffect(() => {
    const scroller = getScrollContainer()
    const isWindow = scroller === window

    const getScrollY = () =>
      isWindow ? window.scrollY : (scroller as HTMLElement).scrollTop

    const getInnerHeight = () =>
      isWindow ? window.innerHeight : (scroller as HTMLElement).clientHeight

    function checkVisibleSections() {
      const innerH = getInnerHeight()
      const scrollY = getScrollY()
      const newVisible: string[] = []

      // Debug: Log current scroll position
      console.log('Checking visible sections:', {
        scrollY,
        innerH,
        sectionsCount: sections.length,
      })

      for (let i = 0; i < sections.length; i++) {
        const { id, headingRef, offsetRem = 0 } = sections[i]
        if (!headingRef?.current) {
          console.log(`Section ${id} has no headingRef`)
          continue
        }

        const offset = remToPx(offsetRem)
        const top =
          headingRef.current.getBoundingClientRect().top +
          (document.documentElement.scrollTop || document.body.scrollTop)

        console.log(`Section ${id}:`, { top, offset, scrollY })

        if (i === 0 && top - offset > scrollY) newVisible.push('_top')

        const next = sections[i + 1]
        const bottom =
          (next?.headingRef?.current?.getBoundingClientRect().top ?? Infinity) +
          (document.documentElement.scrollTop || document.body.scrollTop) -
          remToPx(next?.offsetRem ?? 0)

        if (
          (top > scrollY && top < scrollY + innerH) ||
          (bottom > scrollY && bottom < scrollY + innerH) ||
          (top <= scrollY && bottom >= scrollY + innerH)
        ) {
          newVisible.push(id)
        }
      }

      console.log('New visible sections:', newVisible)
      setVisibleSections(newVisible)
    }

    // Initial run
    const raf = window.requestAnimationFrame(() => checkVisibleSections())

    // Listen to the correct scroller
    const target: any = scroller
    target.addEventListener?.('scroll', checkVisibleSections, { passive: true })
    window.addEventListener('resize', checkVisibleSections)

    return () => {
      window.cancelAnimationFrame(raf)
      target.removeEventListener?.('scroll', checkVisibleSections)
      window.removeEventListener('resize', checkVisibleSections)
    }
  }, [setVisibleSections, sections])
}

const SectionStoreContext = createContext<StoreApi<SectionState> | null>(null)
const useIsoLayout = typeof window === 'undefined' ? useEffect : useLayoutEffect

export function SectionProvider({
  sections,
  children,
}: {
  sections: Array<Section>
  children: React.ReactNode
}) {
  const [store] = useState(() => createSectionStore(sections))
  useVisibleSections(store)

  useIsoLayout(() => {
    store.setState({ sections })
  }, [store, sections])

  return (
    <SectionStoreContext.Provider value={store}>
      {children}
    </SectionStoreContext.Provider>
  )
}

export function useSectionStore<T>(selector: (state: SectionState) => T) {
  const store = useContext(SectionStoreContext)
  if (!store)
    throw new Error('useSectionStore must be used within SectionProvider')
  return useStore(store, selector)
}
