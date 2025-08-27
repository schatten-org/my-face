import { useWindowsStore } from '@/stores/windows'

export default function Taskbar() {
  const windows = useWindowsStore((s) => s.windows)
  const activeId = useWindowsStore((s) => s.activeId)
  const toggleTaskbarClick = useWindowsStore((s) => s.toggleTaskbarClick)

  const sorted = [...windows].sort((a, b) => a.z - b.z)

  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-10 flex items-center px-2 gap-2"
      style={{
        background: 'linear-gradient(#1f76d3, #1358b4)',
        borderTop: '1px solid #0b3e86',
      }}
    >
      <button
        className="px-3 py-1 rounded-sm font-semibold text-white"
        style={{
          background: 'linear-gradient(#59b83b, #2e8a17)',
          border: '1px solid #1f5f10',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4)',
        }}
      >
        Start
      </button>

      <div className="flex-1 flex items-center gap-1 overflow-x-auto">
        {sorted.map((w) => {
          const isActive = activeId === w.id && !w.minimized
          return (
            <button
              key={w.id}
              onClick={() => toggleTaskbarClick(w.id)}
              className="px-3 h-8 min-w-[160px] flex items-center justify-start gap-2 rounded-sm text-white truncate"
              style={{
                background: isActive
                  ? 'linear-gradient(#58a7ff, #2d7be6)'
                  : 'linear-gradient(#2a7ee0, #236dc5)',
                border: '1px solid #0c4da0',
                boxShadow: isActive
                  ? 'inset 0 1px 0 rgba(255,255,255,0.5)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.25)',
                opacity: w.minimized ? 0.7 : 1,
              }}
              title={w.title}
            >
              <span className="w-4 h-4 bg-white/20 rounded-sm" />
              <span className="truncate">{w.title}</span>
            </button>
          )
        })}
      </div>

      <div className="px-3 py-1 text-white text-sm">2:18 PM</div>
    </div>
  )
}
