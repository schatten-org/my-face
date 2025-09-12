import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

import GlowLine from '@/components/ui/glowline'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const nameRef = useRef<HTMLHeadingElement | null>(null)
  const subtitleRef = useRef<HTMLParagraphElement | null>(null)
  const taglineRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    if (heroRef.current) {
      const tl = gsap.timeline()

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.2,
          ease: 'power3.out',
        },
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.6',
        )
        .fromTo(
          taglineRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
          '-=0.6',
        )

      gsap.fromTo(
        nameRef.current,
        { opacity: 0.8 },
        {
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 0.15,
          ease: 'none',
          repeatDelay: gsap.utils.random(2, 5),
        },
      )
    }

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-start overflow-hidden bg-transparent pt-28"
    >
      <div className="absolute inset-0 bg-gray-900/80 z-0 opacity-10" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div ref={heroRef} className="relative text-center z-10 px-6">
        <h1
          ref={nameRef}
          className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#22d3ee]"
        >
          Bedy Briliant Wijaya
        </h1>
        <p
          ref={subtitleRef}
          className="mt-4 text-lg md:text-2xl text-gray-300 tracking-wide font-light"
        >
          Software Engineer | Anime Enjoyer | Fiction Aficionado
        </p>
        <p
          ref={taglineRef}
          className="mt-2 text-sm md:text-base text-gray-400 italic"
        >
          “Quietly crafting code, loudly enjoying anime.”
        </p>
      </div>
      <div className="absolute top-[45%]  md:top-[30%] left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 text-sm tracking-widest z-20">
        ↓ SCROLL
      </div>
      <GlowLine
        orientation="horizontal"
        position="100%"
        color="blue"
        className="z-50"
      />
    </section>
  )
}

export default Hero
