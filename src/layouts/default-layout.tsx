import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import React, { useEffect, useRef } from 'react'

import { DockApp } from '@/components/fragments'

gsap.registerPlugin(ScrollTrigger)

type DefaultLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const personRef = useRef<HTMLImageElement | null>(null)
  const bgRef = useRef<HTMLDivElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | undefined>(undefined)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frameId: number
    const raf = (time: number) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (!personRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        personRef.current,
        { opacity: 1, y: 200, filter: 'blur(0px)' },
        {
          opacity: 0,
          y: -300,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: personRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX - window.innerWidth / 2.5) / 30
      mouseRef.current.y = (event.clientY - window.innerHeight / 2.5) / 30

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(() => {
          if (bgRef.current) {
            bgRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`
          }
          rafId.current = undefined
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-gray-950 relative text-gray-50">
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-screen will-change-transform"
        style={{
          background: '#0a0a23',
          backgroundImage: `
            linear-gradient(to right, rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'moveGrid 20s linear infinite',
        }}
      >
        <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-cyan-400/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 z-0" />
        <div className="h-screen w-full overflow-hidden absolute">
          <div className="absolute inset-0 z-0 flex justify-center items-end opacity-10">
            <img
              ref={personRef}
              src="/images/bg-person.webp"
              alt="Cyberpunk Person"
              className="w-auto h-[80%] animate-pulse-glow cyberpunk-person"
              loading="lazy"
            />
          </div>
        </div>
        <div className="relative z-0 min-h-screen flex flex-col">
          <div className="relative w-full h-full">{children}</div>
          <div className="sticky bottom-10 left-1/2 transform z-50 w-full md:w-auto">
            <DockApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
