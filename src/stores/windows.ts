import { create } from 'zustand'

export type WindowData = {
  id: string
  title: string
  minimized: boolean
  z: number
}

type WindowsState = {
  windows: Array<WindowData>
  activeId: string | null
  nextZ: number
  openWindow: (win: { id: string; title: string }) => void
  focusWindow: (id: string) => void
  minimizeWindow: (id: string, value?: boolean) => void
  toggleTaskbarClick: (id: string) => void
  closeWindow: (id: string) => void
}

export const useWindowsStore = create<WindowsState>((set, get) => ({
  windows: [],
  activeId: null,
  nextZ: 1,

  openWindow: ({ id, title }) => {
    const { windows, nextZ } = get()
    if (!windows.find((w) => w.id === id)) {
      set({
        windows: [...windows, { id, title, minimized: false, z: nextZ }],
        activeId: id,
        nextZ: nextZ + 1,
      })
    } else {
      get().focusWindow(id)
    }
  },

  focusWindow: (id) => {
    const { windows, nextZ } = get()
    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, minimized: false, z: nextZ } : w,
      ),
      activeId: id,
      nextZ: nextZ + 1,
    })
  },

  minimizeWindow: (id, value) => {
    const { windows, activeId } = get()
    const minimized =
      typeof value === 'boolean'
        ? value
        : !windows.find((w) => w.id === id)?.minimized
    set({
      windows: windows.map((w) => (w.id === id ? { ...w, minimized } : w)),
      activeId: minimized && activeId === id ? null : activeId,
    })
  },

  toggleTaskbarClick: (id) => {
    const { activeId, windows } = get()
    const w = windows.find((win) => win.id === id)
    if (!w) return
    if (activeId === id && !w.minimized) {
      get().minimizeWindow(id, true)
    } else {
      get().focusWindow(id)
    }
  },

  closeWindow: (id) => {
    const { windows, activeId } = get()
    const rest = windows.filter((w) => w.id !== id)

    const nextActive = rest.length
      ? rest.reduce((a, b) => (a.z > b.z ? a : b)).id
      : null
    set({
      windows: rest,
      activeId: activeId === id ? nextActive : activeId,
    })
  },
}))
