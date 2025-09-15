// src/components/page-components/mega-guide/doc-blocks.tsx
'use client'

import clsx from 'clsx'

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
    // match blog typography + no clamp
    <article className="prose prose-lg prose-blue max-w-none">
      {/* keep custom heading styles out of typography resets */}
      <header className="not-prose mt-0 mb-6">
        <h1 className="header-dark !mt-0">{title}</h1>
        {lead && <p className="lead-dark">{lead}</p>}
      </header>

      {/* IMPORTANT: don't add another `.prose` here */}
      <div className="contents">{children}</div>
    </article>
  )
}

export function Heading({
  id,
  children,
}: {
  id: string
  children: React.ReactNode
}) {
  return (
    <h2 id={id} className={clsx('subheader-dark scroll-mt-24')}>
      {children}
    </h2>
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

/** ————— Simple properties list ————— */
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

/** ————— Simple code blocks ————— */
export function Code({
  children,
  title,
}: {
  children: string
  title?: string
}) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-xl ring-1 ring-gray-200">
      {title && (
        <figcaption className="border-b border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-700">
          {title}
        </figcaption>
      )}
      <pre className="overflow-x-auto bg-gray-50 p-4 text-sm">
        <code className="font-code whitespace-pre">{children.trim()}</code>
      </pre>
    </figure>
  )
}
