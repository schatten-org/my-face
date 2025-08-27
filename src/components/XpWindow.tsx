import { useEffect, useRef } from 'react'
import interact from 'interactjs'
import { useWindowsStore } from '@/stores/windows'

import 'xp.css/dist/XP.css'

type XpWindowProps = {
  id: string
  title: string
  initialPos?: { x: number; y: number }
  children?: React.ReactNode
}

export default function XpWindow({
  id,
  title,
  initialPos = { x: 60, y: 60 },
  children,
}: XpWindowProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const { openWindow, focusWindow, minimizeWindow, closeWindow } =
    useWindowsStore.getState()
  const win = useWindowsStore((s) => s.windows.find((w) => w.id === id))
  const z = win?.z ?? 1
  const minimized = !!win?.minimized

  // register window on mount
  useEffect(() => {
    openWindow({ id, title })
    // set initial transform
    if (ref.current) {
      ref.current.style.transform = `translate(${initialPos.x}px, ${initialPos.y}px)`
      ref.current.setAttribute('data-x', String(initialPos.x))
      ref.current.setAttribute('data-y', String(initialPos.y))
    }
    // drag setup
    if (ref.current) {
      interact(ref.current).draggable({
        listeners: {
          move(event) {
            const target = event.target as HTMLElement
            const x =
              parseFloat(target.getAttribute('data-x') || '0') + event.dx
            const y =
              parseFloat(target.getAttribute('data-y') || '0') + event.dy
            target.style.transform = `translate(${x}px, ${y}px)`
            target.setAttribute('data-x', x.toString())
            target.setAttribute('data-y', y.toString())
          },
        },
      })
    }
    // cleanup? (optional)
    // return () => closeWindow(id)
  }, [id])

  if (minimized) return null

  return (
    <div
      ref={ref}
      className="window absolute w-[360px] shadow-xl"
      style={{ zIndex: z }}
      onMouseDown={() => focusWindow(id)}
    >
      <div
        className="title-bar select-none"
        onDoubleClick={() => minimizeWindow(id, true)}
      >
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button
            aria-label="Minimize"
            onClick={(e) => {
              e.stopPropagation()
              minimizeWindow(id, true)
            }}
          />
          <button
            aria-label="Maximize"
            onClick={(e) => {
              e.stopPropagation() /* TODO: maximize */
            }}
          />
          <button
            aria-label="Close"
            onClick={(e) => {
              e.stopPropagation()
              closeWindow(id)
            }}
          />
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  )
}
