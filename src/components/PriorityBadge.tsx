import type { Priority } from '../api/types'

interface PriorityBadgeProps {
  priority: Priority
}

const STYLES: Record<Priority, { label: string; className: string }> = {
  LOW: { label: 'Basse', className: 'bg-gray-100 text-gray-700' },
  MEDIUM: { label: 'Moyenne', className: 'bg-orange-100 text-orange-700' },
  HIGH: { label: 'Haute', className: 'bg-red-100 text-red-700' },
}

export function PriorityBadge({ priority }: PriorityBadgeProps) {
  const { label, className } = STYLES[priority]

  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${className}`}>
      {label}
    </span>
  )
}