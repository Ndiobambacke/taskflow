import type { Task } from '../../api/types'
import { PriorityBadge } from '../../components/PriorityBadge'

interface TaskCardProps {
  task: Task
}

export function TaskCard({ task }: TaskCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{task.description}</p>
      <div className="mt-3">
        <PriorityBadge priority={task.priority} />
      </div>
    </article>
  )
}