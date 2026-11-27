import { PriorityBadge } from '../../components/PriorityBadge'
import type { Task, TaskStatus } from '../../api/types'

interface TaskCardProps {
  task: Task
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void
  onDelete: (taskId: string) => void
}

function todayIso(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

function isOverdue(task: Task): boolean {
  return task.dueDate !== null && task.dueDate < todayIso() && task.status !== 'DONE'
}

export function TaskCard({ task, onStatusChange, onDelete }: TaskCardProps) {
  const overdue = isOverdue(task)

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{task.description}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <PriorityBadge priority={task.priority} />
        {overdue && (
          <span className="rounded-full bg-orange-800 px-2 py-0.5 text-xs font-semibold text-white">
            En retard
          </span>
        )}
      </div>
      <div className="mt-3">
         <select
         value={task.status}
          onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
          className="rounded border border-slate-300 p-2 text-sm">
          <option value="TODO">À faire</option>
          <option value="DOING">En cours</option>
          <option value="DONE">Terminé</option>
        </select>
      </div>
      <div className="mt-3">
        <button onClick={() => onDelete(task.id)} className="rounded bg-red-700 px-3 py-2 text-sm font-medium text-white hover:bg-red-700">Supprimer</button>
      </div>
    </article>
  )
}