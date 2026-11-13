interface HeaderProps {
  projectName: string
}

export function Header({ projectName }: HeaderProps) {
  return (
    <header className="flex items-baseline gap-3 border-b border-slate-200 bg-white px-6 py-4">
      <h1 className="text-2xl font-bold">TaskFlow</h1>
      <p className="text-lg text-slate-600">{projectName}</p>
    </header>
  )
}