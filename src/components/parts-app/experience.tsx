'use client'

import { Code2, Sparkles } from 'lucide-react'
import React, { memo, useCallback, useState } from 'react'

import GlowLine from '@/components/ui/glowline'

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface TimelineItemData {
  id: string
  title: string
  company: string
  type: string
  duration: string
  icon: IconType
  responsibilities: Array<string>
  skills: Array<string>
}

interface TimelineItemContentProps {
  item: TimelineItemData
}

const timelineData: Array<TimelineItemData> = [
  {
    id: 'exp-1',
    title: 'Full Stack Developer',
    company: 'PT Harmonix Teknologi Peentar',
    type: 'Full-time',
    duration: 'January 2025 - August 2025',
    icon: Code2,
    responsibilities: [
      'Contributed to Universitas Mercu Buana’s Academic Information System, focusing on master data and financial modules.',
      'Developed back-end with Java Spring Boot and front-end with Next.js, integrating PostgreSQL, Docker, Kubernetes (K8s), and Argo CD.',
      'Fixed bugs in Kimia Farma Mobile’s SmartStock backend (Java Spring Boot).',
      'Enhanced system performance and reliability through efficient debugging, integration, and deployment practices.',
      'Collaborated in an Agile team to ensure efficient, coordinated delivery.',
    ],
    skills: [
      'Java',
      'JavaScript',
      'TypeScript',
      'Spring Boot',
      'Next JS',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
      'Argo CD',
      'Microservices',
      'System Optimization',
    ],
  },
  {
    id: 'exp-2',
    title: 'Full Stack Developer',
    company: 'PT Nutech Integrasi',
    type: 'Full-time',
    duration: 'September 2023 - December 2024',
    icon: Code2,
    responsibilities: [
      'Contributed to CEISA 4.0, the national customs system, enhancing automation and digitalization of import-export processes.',
      'Developed and maintained the Executive Dashboard for LRT Jabodebek, enabling real-time monitoring and strategic decisions.',
      'Built GLID Logistics System for PT POS Indonesia, improving package tracking and operational efficiency.',
      'Implemented microservices and micro-frontend architecture to boost scalability and flexibility.',
      'Applied clean architecture and reusable components to minimize long-term maintenance.',
      'Collaborated in Agile workflows through sprint planning, code reviews, and cross-functional teamwork.',
    ],
    skills: [
      'JavaScript',
      'TypeScript',
      'Java',
      'React JS',
      'Next JS',
      'Express JS',
      'Nest JS',
      'Spring Boot',
      'PostgreSQL',
      'Docker',
      'Microservices',
      'Micro-frontend',
      'Agile Methodologies',
    ],
  },
]

const Badge = ({
  children,
  className = '',
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold 
        bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-400/30 shadow-[0_0_10px_#22d3ee80] ${className}`}
    >
      {children}
    </span>
  )
}

interface TimelineItemProps {
  item: TimelineItemData
  expanded: boolean
  onToggle: (id: string) => void
  index: number
}

const TimelineItemContent = memo(function TimelineItemContent({
  item,
}: TimelineItemContentProps) {
  return (
    <div className="mt-6 space-y-6 animate-in fade-in duration-500">
      <div className="space-y-3">
        {item.responsibilities.map((resp, idx) => (
          <div
            key={`${item.id}-resp-${idx}`}
            className="flex items-start gap-3 group"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-pink-400 transition-colors duration-200 shadow-[0_0_6px_#22d3ee]" />
            <p className="text-sm text-gray-300 leading-relaxed">{resp}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-2 border-t border-cyan-400/20">
        {item.skills.map((skill, i) => (
          <Badge key={`${item.id}-skill-${i}`}>{skill}</Badge>
        ))}
      </div>
    </div>
  )
})
TimelineItemContent.displayName = 'TimelineItemContent'

const TimelineItem = memo(function TimelineItem({
  item,
  expanded,
  onToggle,
}: TimelineItemProps) {
  const Icon = item.icon

  return (
    <div className="relative group">
      <div className="absolute left-6 top-14 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-70" />
      <div className="absolute left-4 top-6 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_#22d3ee]">
        <div className="w-2 h-2 bg-cyan-300 rounded-full opacity-80 animate-pulse" />
      </div>
      <div className="ml-12 mb-8">
        <div
          className={`bg-black/60 backdrop-blur-md border border-cyan-400/30 rounded-lg transition-all duration-300
          ${expanded ? 'shadow-[0_0_20px_#22d3ee]' : 'hover:shadow-[0_0_15px_#9333ea]'}`}
        >
          <button
            onClick={() => onToggle(item.id)}
            className="w-full text-left px-2 py-4 md:px-6 md:py-6 flex items-start md:items-center justify-between cursor-pointer"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-md">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-3 ml-12 text-sm">
                <Badge>{item.type}</Badge>
                <span className="text-gray-400">{item.duration}</span>
              </div>
            </div>

            <span
              className={`text-cyan-400 transition-transform duration-300 mt-2 md:mt-0 ${
                expanded ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          {expanded && (
            <div className="px-6 pb-6 border-t border-cyan-400/20">
              <TimelineItemContent item={item} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
})
TimelineItem.displayName = 'TimelineItem'

const ProfessionalTimeline = () => {
  const [expanded, setExpanded] = useState<Set<string>>(
    () => new Set([timelineData[0].id]),
  )

  const onToggle = useCallback((id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  return (
    <section id="experience" className="relative">
      <div className="w-full min-h-fit py-20 flex flex-col items-center gap-10">
        <div className="relative max-w-3xl mx-auto text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]" />
            <h2 className="projects-title text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#9333EA]">
              Professional Experience
            </h2>
          </div>
          <p className="projects-desc mt-3 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            A timeline of my journey as a developer and engineer, highlighting
            key roles, responsibilities, and technologies used.
          </p>
        </div>
        <div className="relative max-w-7xl min-h-fit px-2 md:px-0 mx-auto">
          {timelineData.map((item, idx) => (
            <TimelineItem
              key={item.id}
              item={item}
              expanded={expanded.has(item.id)}
              onToggle={onToggle}
              index={idx}
            />
          ))}
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

export default ProfessionalTimeline
