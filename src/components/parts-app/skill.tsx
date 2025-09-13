import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Sparkles } from 'lucide-react'

import GlitchVault from '@/components/ui/glitchvault'
import GlowLine from '@/components/ui/glowline'
import { useBreakpoint } from '@/hooks'

gsap.registerPlugin(ScrollTrigger)

type IconType =
  | 'java'
  | 'typescript'
  | 'golang'
  | 'spring'
  | 'nestjs'
  | 'react'
  | 'postgresql'
  | 'docker'
  | 'kubernetes'
  | 'elasticsearch'

type GlowColor = 'cyan' | 'purple' | 'pink'

interface SkillConfig {
  id: string
  orbitRadius: { mobile: number; tablet: number; desktop: number }
  size: number
  speed: number
  iconType: IconType
  phaseShift: number
  glowColor: GlowColor
  label: string
}

interface OrbitingSkillProps {
  config: SkillConfig
  angle: number
  resolvedRadius: number
  resolvedSize: number
}

const glowColors = {
  cyan: {
    primary: 'rgba(34, 211, 238, 0.6)',
    secondary: 'rgba(34, 211, 238, 0.25)',
    border: 'rgba(34, 211, 238, 0.4)',
  },
  purple: {
    primary: 'rgba(168, 85, 247, 0.6)',
    secondary: 'rgba(168, 85, 247, 0.25)',
    border: 'rgba(168, 85, 247, 0.4)',
  },
  pink: {
    primary: 'rgba(236, 72, 153, 0.6)',
    secondary: 'rgba(236, 72, 153, 0.25)',
    border: 'rgba(236, 72, 153, 0.4)',
  },
}

const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  java: {
    component: () => (
      <img src="/svg/logo-java.svg" alt="Java" className="w-4/5 h-4/5" />
    ),
    color: '#007396',
  },
  typescript: {
    component: () => (
      <img src="/svg/logo-typescript.svg" alt="TS" className="w-full h-full" />
    ),
    color: '#3178C6',
  },
  golang: {
    component: () => (
      <img
        src="/svg/logo-golang.svg"
        alt="Go"
        className="w-full h-full bg-white rounded-full"
      />
    ),
    color: '#00ADD8',
  },
  spring: {
    component: () => (
      <img
        src="/svg/logo-spring.svg"
        alt="Spring"
        className="w-full h-full bg-white rounded-full"
      />
    ),
    color: '#6DB33F',
  },
  nestjs: {
    component: () => (
      <img src="/svg/logo-nestjs.svg" alt="NestJS" className="w-full h-full" />
    ),
    color: '#E0234E',
  },
  react: {
    component: () => (
      <img src="/svg/logo-react.svg" alt="React" className="w-full h-full" />
    ),
    color: '#61DAFB',
  },
  postgresql: {
    component: () => (
      <img
        src="/svg/logo-postgresql.svg"
        alt="Postgres"
        className="w-full h-full"
      />
    ),
    color: '#336791',
  },
  docker: {
    component: () => (
      <img src="/svg/logo-docker.svg" alt="Docker" className="w-full h-full" />
    ),
    color: '#2496ED',
  },
  kubernetes: {
    component: () => (
      <img src="/svg/logo-kubernetes.svg" alt="K8s" className="w-full h-full" />
    ),
    color: '#326CE5',
  },
  elasticsearch: {
    component: () => (
      <img
        src="/svg/logo-elasticsearch.svg"
        alt="ES"
        className="w-full h-full"
      />
    ),
    color: '#F1502F',
  },
}

const skillsConfig: Array<SkillConfig> = [
  {
    id: 'java',
    orbitRadius: { mobile: 60, tablet: 80, desktop: 100 },
    size: 50,
    speed: 1,
    iconType: 'java',
    phaseShift: 0,
    glowColor: 'cyan',
    label: 'Java',
  },
  {
    id: 'typescript',
    orbitRadius: { mobile: 60, tablet: 80, desktop: 100 },
    size: 50,
    speed: 1,
    iconType: 'typescript',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'TypeScript',
  },
  {
    id: 'golang',
    orbitRadius: { mobile: 60, tablet: 80, desktop: 100 },
    size: 50,
    speed: 1,
    iconType: 'golang',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'cyan',
    label: 'Golang',
  },

  {
    id: 'spring',
    orbitRadius: { mobile: 120, tablet: 140, desktop: 180 },
    size: 50,
    speed: -0.6,
    iconType: 'spring',
    phaseShift: 0,
    glowColor: 'purple',
    label: 'Spring',
  },
  {
    id: 'nestjs',
    orbitRadius: { mobile: 120, tablet: 140, desktop: 180 },
    size: 50,
    speed: -0.6,
    iconType: 'nestjs',
    phaseShift: (2 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'NestJS',
  },
  {
    id: 'react',
    orbitRadius: { mobile: 120, tablet: 140, desktop: 180 },
    size: 50,
    speed: -0.6,
    iconType: 'react',
    phaseShift: (4 * Math.PI) / 3,
    glowColor: 'purple',
    label: 'React',
  },

  {
    id: 'postgresql',
    orbitRadius: { mobile: 180, tablet: 200, desktop: 260 },
    size: 50,
    speed: 0.4,
    iconType: 'postgresql',
    phaseShift: 0,
    glowColor: 'pink',
    label: 'PostgreSQL',
  },
  {
    id: 'docker',
    orbitRadius: { mobile: 180, tablet: 200, desktop: 260 },
    size: 50,
    speed: 0.4,
    iconType: 'docker',
    phaseShift: (2 * Math.PI) / 4,
    glowColor: 'pink',
    label: 'Docker',
  },
  {
    id: 'kubernetes',
    orbitRadius: { mobile: 180, tablet: 200, desktop: 260 },
    size: 50,
    speed: 0.4,
    iconType: 'kubernetes',
    phaseShift: (2 * Math.PI) / 2,
    glowColor: 'pink',
    label: 'Kubernetes',
  },
  {
    id: 'elasticsearch',
    orbitRadius: { mobile: 180, tablet: 200, desktop: 260 },
    size: 50,
    speed: 0.4,
    iconType: 'elasticsearch',
    phaseShift: (6 * Math.PI) / 4,
    glowColor: 'pink',
    label: 'Elasticsearch',
  },
]

const SkillIcon = memo(({ type }: { type: IconType }) => {
  const IconComponent = iconComponents[type].component
  return <IconComponent />
})
SkillIcon.displayName = 'SkillIcon'

const OrbitingSkill = memo(
  ({ config, angle, resolvedRadius, resolvedSize }: OrbitingSkillProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const { iconType, label } = config

    const x = Math.cos(angle) * resolvedRadius
    const y = Math.sin(angle) * resolvedRadius

    return (
      <div
        className="absolute top-1/2 left-1/2 transition-transform duration-300 ease-out"
        style={{
          width: `${resolvedSize}px`,
          height: `${resolvedSize}px`,
          transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
          zIndex: isHovered ? 30 : 10,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`relative w-full h-full p-2 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer`}
          style={{
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
            background: isHovered
              ? `radial-gradient(circle, ${iconComponents[iconType].color}40, transparent 70%)`
              : 'rgba(30,30,40,0.6)',
            boxShadow: isHovered
              ? `0 0 25px ${iconComponents[iconType].color}, 0 0 50px ${iconComponents[iconType].color}40`
              : `0 0 8px rgba(0,0,0,0.6)`,
          }}
        >
          <SkillIcon type={iconType} />
          {isHovered && (
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded text-xs text-white whitespace-nowrap pointer-events-none shadow-lg z-40 animate-fadeIn">
              {label}
            </div>
          )}
        </div>
      </div>
    )
  },
)
OrbitingSkill.displayName = 'OrbitingSkill'

const GlowingOrbitPath = memo(
  ({
    radius,
    glowColor = 'cyan',
    animationDelay = 0,
  }: {
    radius: number
    glowColor?: GlowColor
    animationDelay?: number
  }) => {
    const colors = glowColors[glowColor]
    return (
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
      >
        <div
          className="absolute inset-0 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
            boxShadow: `0 0 60px ${colors.primary}, inset 0 0 60px ${colors.secondary}`,
            animationDelay: `${animationDelay}s`,
          }}
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 20px ${colors.secondary}`,
          }}
        />
      </div>
    )
  },
)
GlowingOrbitPath.displayName = 'GlowingOrbitPath'

const Skill = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const [time, setTime] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const bp = useBreakpoint()

  const orbitLayers = useMemo(
    () => ({
      mobile: [
        { radius: 60, glowColor: 'cyan' as GlowColor, delay: 0 },
        { radius: 120, glowColor: 'purple' as GlowColor, delay: 1.2 },
        { radius: 180, glowColor: 'pink' as GlowColor, delay: 2 },
      ],
      tablet: [
        { radius: 80, glowColor: 'cyan' as GlowColor, delay: 0 },
        { radius: 140, glowColor: 'purple' as GlowColor, delay: 1.2 },
        { radius: 200, glowColor: 'pink' as GlowColor, delay: 2 },
      ],
      desktop: [
        { radius: 100, glowColor: 'cyan' as GlowColor, delay: 0 },
        { radius: 180, glowColor: 'purple' as GlowColor, delay: 1.2 },
        { radius: 260, glowColor: 'pink' as GlowColor, delay: 2 },
      ],
    }),
    [],
  )
  const layers = orbitLayers[bp]

  useEffect(() => {
    const update = () => {
      if (!isPaused) setTime(performance.now() / 1000)
    }
    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [isPaused])

  useEffect(() => {
    if (headingRef.current && descRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
      )
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' },
      )
    }
  }, [])

  return (
    <section id="skills" className="relative">
      <GlitchVault
        className="relative w-full min-h-screen border border-slate-800 rounded-xl bg-slate-900/50 backdrop-blur-sm py-12 flex flex-col items-center justify-center gap-10"
        glitchColor="linear-gradient(circle at 50% 50%, #9333ea, #22d3ee)"
        glitchRadius={100}
      >
        <div className="relative max-w-3xl mx-auto text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_8px_#22d3ee]" />
            <h2
              ref={headingRef}
              className="
                text-2xl md:text-5xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                drop-shadow-[0_0_10px_#9333ea]
              "
            >
              My Skills
            </h2>
          </div>

          <p
            ref={descRef}
            className="text-gray-300 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            A collection of tools, technologies, and frameworks I’ve mastered
            and frequently use to craft modern, scalable, and delightful
            applications.
          </p>
        </div>

        <div
          className="relative w-[clamp(280px,80vw,650px)] h-[clamp(280px,80vw,650px)] flex items-center justify-center mt-16 md:mt-0 mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative shadow-[0_0_30px_#22d3ee] bg-gradient-to-br from-cyan-500/40 to-purple-500/40 backdrop-blur-md">
            <div className="absolute inset-0 rounded-full bg-cyan-500/25 blur-xl animate-pulse"></div>
            <div
              className="absolute inset-0 rounded-full bg-purple-500/40 blur-2xl animate-pulse"
              style={{ animationDelay: '1s' }}
            ></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 blur-xl animate-spin-slow"></div>
          </div>
          {layers.map((layer, idx) => (
            <GlowingOrbitPath
              key={`path-${idx}`}
              radius={layer.radius}
              glowColor={layer.glowColor}
              animationDelay={layer.delay}
            />
          ))}
          {skillsConfig.map((config) => {
            const resolvedRadius = config.orbitRadius[bp]
            const resolvedSize =
              bp === 'mobile' ? Math.max(36, config.size - 12) : config.size
            const angle = time * config.speed + (config.phaseShift || 0)
            return (
              <OrbitingSkill
                key={config.id}
                config={config}
                angle={angle}
                resolvedRadius={resolvedRadius}
                resolvedSize={resolvedSize}
              />
            )
          })}
        </div>
      </GlitchVault>
      <GlowLine
        orientation="horizontal"
        position="100%"
        color="purple"
        className="z-50"
      />
    </section>
  )
}

export default Skill
