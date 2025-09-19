import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect, useRef } from 'react'

import GlitchText from '@/components/ui/glitch'
import GlowLine from '@/components/ui/glowline'
import ParticleText from '@/components/ui/particle'
import TypewriterText from '@/components/ui/typewriter'

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
      className="relative min-h-screen flex flex-col justify-start overflow-hidden items-center"
    >
      <div className="absolute inset-0 bg-gray-900/80 z-0 opacity-40" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />

      <div ref={heroRef} className="relative mx-auto text-center mt-32">
        <h1
          ref={nameRef}
          aria-label="Bedy Briliant Wijaya"
          className="text-center"
        >
          <ParticleText
            text="Bedy Briliant Wijaya"
            particleCount={150}
            particleColor="#22d3ee"
          />
        </h1>
        <p
          aria-label='"Software Engineer | Anime Enjoyer | Fiction Aficionado"'
          ref={subtitleRef}
        >
          <GlitchText speed={3.5}>
            Software Engineer | Anime Enjoyer | Fiction Aficionado
          </GlitchText>
        </p>
        <p
          aria-label='"Quietly crafting code, loudly enjoying anime."'
          ref={taglineRef}
          className="mt-2"
        >
          <TypewriterText
            text="“Quietly crafting code, loudly enjoying anime.”"
            speed={100}
            deleteSpeed={50}
            pauseDuration={2000}
            loop={true}
            showCursor={true}
            className="text-sm text-white italic"
          />
        </p>
      </div>

      <div className="absolute top-[35%] md:top-[30%] left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 text-sm tracking-widest z-20">
        ↓ SCROLL
      </div>

      <GlowLine
        orientation="horizontal"
        position="100%"
        color="purple"
        className="z-50"
      />
    </section>
  )
}

export default Hero
