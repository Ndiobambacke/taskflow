import type { ReactNode } from 'react'

interface ColumnProps {
  title: string
  count: number
  children: ReactNode
}

export function Column({ title, count, children }: ColumnProps) {
  return (
    <section className="rounded-xl bg-slate-200/60 p-3">
      <h2 className="mb-3 flex items-center justify-between px-1 font-semibold">
        {title}
        <span className="rounded-full bg-white px-2 py-0.5 text-sm text-slate-600">
          {count}
        </span>
      </h2>
      {children}
    </section>
  )
}