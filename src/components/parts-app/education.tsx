import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'

import GlowLine from '@/components/ui/glowline'

gsap.registerPlugin(ScrollTrigger)

const coderData = {
  education: {
    degree: 'Bachelor of Informatics Engineering',
    university: 'Universitas Indo Global Mandiri',
    year: '2019 – 2023',
  },
}

const CoderProfileCard = () => {
  return (
    <div className="edu-card max-w-2xl w-full mx-auto bg-gradient-to-r from-[#0a0f2c] to-[#120024] border-cyan-500/30 relative rounded-lg border shadow-[0_0_25px_rgba(0,255,255,0.4)] overflow-hidden">
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-cyan-400 animate-pulse"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 flex justify-between items-center bg-black/60 border-b border-cyan-400/20">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500 shadow-[0_0_10px_#ff0000]"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400 shadow-[0_0_10px_#ffff00]"></div>
          <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_10px_#00ff00]"></div>
        </div>
        <div className="text-xs text-cyan-400 font-mono">education.js</div>
      </div>
      <div className="overflow-hidden px-4 lg:px-8 py-6 relative">
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-cyan-500 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-20 filter blur-3xl"></div>
        <div className="relative flex">
          <div className="hidden md:flex flex-col items-end pr-4 text-fuchsia-500 font-mono text-xs">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">
                {i + 1}
              </div>
            ))}
          </div>
          <code className="font-mono text-xs md:text-sm lg:text-base w-full text-left leading-relaxed">
            <div>
              <span className="mr-2 text-pink-500">const</span>
              <span className="mr-2 text-cyan-400">education</span>
              <span className="mr-2 text-pink-500">=</span>
              <span className="text-white">{'{'}</span>
            </div>
            <div className="pl-6">
              <span className="text-purple-400">degree:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.degree}'
              </span>
              ,
            </div>
            <div className="pl-6">
              <span className="text-purple-400">university:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.university}'
              </span>
              ,
            </div>
            <div className="pl-6">
              <span className="text-purple-400">year:</span>{' '}
              <span className="text-green-400">
                '{coderData.education.year}'
              </span>
            </div>
            <div>
              <span className="text-white">{'};'}</span>
            </div>
          </code>
        </div>
      </div>

      <div className="px-4 lg:px-8 pb-3 border-t border-cyan-400/20 text-xs text-gray-400 flex justify-between items-center font-mono bg-black/40">
        <span>UTF-8</span>
        <span className="text-pink-400">JavaScript</span>
        <span>Ln 8, Col 2</span>
      </div>
    </div>
  )
}

const EducationSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('#education h2, #education p', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '#education',
          start: 'top 80%',
        },
      })

      gsap.from('#education .edu-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#education',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="education" className="relative">
      <div
        ref={sectionRef}
        className="w-full min-h-fit py-20 flex flex-col items-center gap-10"
      >
        <div className="relative max-w-3xl mx-auto text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]" />
            <h2 className="projects-title text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#9333EA]">
              Education Background
            </h2>
          </div>
          <p className="projects-desc mt-3 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            My academic journey in Informatics Engineering, laying the
            foundation for my career in technology and software development.
          </p>
        </div>
        <div className="relative max-w-7xl min-h-fit px-2 md:px-0 mx-auto">
          <CoderProfileCard />
        </div>
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

export default EducationSection
