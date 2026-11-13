import type { Task } from '../../api/types'
import { PriorityBadge } from '../../components/PriorityBadge'

interface TaskCardProps {
  task: Task
}

/** Date du jour au format « AAAA-MM-JJ » (fuseau local). */
function todayIso(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function isOverdue(task: Task): boolean {
  return task.dueDate !== null && task.dueDate < todayIso() && task.status !== 'DONE'
}

export function TaskCard({ task }: TaskCardProps) {
  const overdue = isOverdue(task)

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{task.description}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PriorityBadge priority={task.priority} />
        {overdue && (
          <span className="rounded-full bg-red-600 px-2 py-0.5 text-xs font-semibold text-white">
            En retard
          </span>
        )}
      </div>
    </article>
  )
}