// src/components/page-components/mega-guide/doc-blocks.tsx
'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { createContext, useEffect, useRef } from 'react'
import { useSectionStore } from './section-provider'
import { Tag } from './Tag'

/** ————— Page shell ————— */
// doc-blocks.tsx
export function Page({
  title,
  lead,
  children,
}: {
  title: string
  lead?: string
  children: React.ReactNode
}) {
  return (
    <article className="prose prose-h1:mt-0 max-w-none">
      <header className="mt-0 mb-6">
        <h1 className="header-dark !mt-0">{title}</h1>
        {lead && <p className="lead-dark">{lead}</p>}
      </header>

      <div className="prose">{children}</div>
      {/* … */}
    </article>
  )
}

/** ————— Headings that register with SectionProvider ————— */
const AnchorContext = createContext<string | null>(null)

export function Heading({
  id,
  children,
  tag,
  label,
}: {
  id: string
  children: React.ReactNode
  tag?: string
  label?: string
}) {
  const ref = useRef<HTMLHeadingElement>(null)
  const register = useSectionStore((s) => s.registerHeading)

  useEffect(() => {
    register({ id, ref, offsetRem: tag || label ? 8 : 6 })
  }, [id, register, tag, label])

  return (
    <>
      <div className="flex items-center gap-3">
        {tag && <Tag>{tag as any}</Tag>}
        {tag && label && <span className="h-1 w-1 rounded-full bg-gray-300" />}
        {label && (
          <span className="font-mono text-base text-gray-500">{label}</span>
        )}
      </div>
      <h2
        id={id}
        ref={ref}
        className={clsx(
          tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24',
          'subheader-dark',
        )}
      >
        <Link
          href={`#${id}`}
          className="text-inherit no-underline hover:underline"
        >
          {children}
        </Link>
      </h2>
      <AnchorContext.Provider value={id}>{null}</AnchorContext.Provider>
    </>
  )
}

/** ————— 2-col content blocks ————— */
export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'lg:sticky lg:top-[calc(var(--nav-height)+1rem)]',
      )}
    >
      {children}
    </div>
  )
}

/** ————— Properties list ————— */
export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul className="m-0 list-none divide-y divide-gray-200 p-0">{children}</ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
}: {
  name: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <li className="py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code className="font-code text-sm">{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-gray-500">{type}</dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full">{children}</dd>
      </dl>
    </li>
  )
}

/** ————— Code blocks ————— */
export function CodeGroup({
  title,
  tag,
  label,
  children,
}: {
  title: string
  tag?: string
  label?: string
  children: React.ReactNode
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl ring-1 ring-gray-200">
      {(title || tag || label) && (
        <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-4 py-2">
          {title && (
            <h3 className="mr-auto text-xs font-semibold text-gray-700">
              {title}
            </h3>
          )}
          {tag && <Tag>{tag as any}</Tag>}
          {tag && label && (
            <span className="h-1 w-1 rounded-full bg-gray-300" />
          )}
          {label && (
            <span className="font-mono text-xs text-gray-500">{label}</span>
          )}
        </div>
      )}
      <div className="bg-gray-50">{children}</div>
    </div>
  )
}

export function Code({
  children,
  title,
}: {
  children: string
  title?: string
}) {
  return (
    <pre className="overflow-x-auto p-4 text-sm">
      <code className="font-code whitespace-pre">{children.trim()}</code>
    </pre>
  )
}
