import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

import GlowLine from '@/components/ui/glowline'
import TextHighlighter from '@/components/ui/text-highlighter'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      tl.fromTo(
        '.about-heading',
        { opacity: 0, y: 40, scale: 0.95, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
        },
      ).fromTo(
        '.about-text',
        { opacity: 0, y: 30, willChange: 'transform, opacity' },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        },
        '-=0.4',
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-900/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-900/50 rounded-full blur-3xl animate-pulse" />

      <div
        ref={containerRef}
        className="relative max-w-3xl min-h-screen mx-auto text-center z-10 space-y-8 py-20 px-3 md:px-6"
      >
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]" />
          <h2
            className="
              text-2xl md:text-5xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
              drop-shadow-[0_0_10px_#9333ea]
            "
          >
            About Me
          </h2>
        </div>

        <p className="about-text text-gray-300 text-sm md:text-base max-w-full mx-auto leading-loose">
          Hey! I’m{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #22d3ee, #9333ea)"
            className="font-semibold text-white"
          >
            Bedy Briliant Wijaya
          </TextHighlighter>
          , but most people just call me{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #9333ea, #ec4899)"
            className="font-semibold text-white"
          >
            Bedy
          </TextHighlighter>
          . By day I’m a{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #ec4899, #22d3ee)"
            className="font-semibold text-white"
          >
            Software Engineer
          </TextHighlighter>
          , and by night you’ll probably find me watching anime, reading
          fiction, or vibing to playlists that jump from lo-fi beats all the way
          to heavy metal (yup, my music taste has no boundaries 🎧).
          <br />
          <br />I also have a soft spot for{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #22d3ee, #9333ea)"
            className="font-semibold text-white"
          >
            history books
          </TextHighlighter>{' '}
          and lately I’ve been learning{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #ec4899, #22d3ee)"
            className="font-semibold text-white"
          >
            Japanese
          </TextHighlighter>{' '}
          step by step, hoping one day I can watch anime and sing along to J-pop
          without subtitles (a dream, but we’ll get there 😂).
        </p>
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

export default About
