import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import TextHighlighter from '@/components/ui/text-highlighter'
import GlowLine from '@/components/ui/glowline'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const textRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {
    if (headingRef.current && textRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      })

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40, filter: 'blur(6px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
        },
      ).fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        '-=0.5',
      )
    }
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-6 bg-gray-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-cover bg-center" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-3xl mx-auto text-center z-10">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_10px_#9333ea] mb-6"
        >
          About Me
        </h2>
        <p
          ref={textRef}
          className="text-gray-300 leading-loose text-base md:text-lg"
        >
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
          there’s something fascinating about digging into how the world ended
          up the way it is. And lately, I’ve been learning{' '}
          <TextHighlighter
            highlightColor="linear-gradient(to right, #ec4899, #22d3ee)"
            className="font-semibold text-white"
          >
            Japanese
          </TextHighlighter>{' '}
          step by step, hoping one day I can watch anime and sing along to J-pop
          without ever needing subtitles again (a dream, but we’ll get there
          😂).
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
