export type TaskStatus = 'TODO' | 'DOING' | 'DONE'
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH'

export interface Task {
  id: number
  projectId: number
  title: string
  description: string
  status: TaskStatus
  priority: Priority
  assigneeId: number | null
  dueDate: string | null // ISO : "2026-11-15"
  createdAt: string // ISO 8601
}

export interface Project {
  id: number
  name: string
  description: string
  ownerId: number
}