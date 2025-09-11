import { useEffect, useState } from 'react'

const useBreakpoint = () => {
  const [bp, setBp] = useState<'mobile' | 'tablet' | 'desktop'>(() => {
    if (typeof window === 'undefined') return 'desktop'
    const w = window.innerWidth
    return w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop'
  })

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth
      setBp(w < 640 ? 'mobile' : w < 1024 ? 'tablet' : 'desktop')
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return bp
}

export default useBreakpoint
