'use client'

import React, { memo, useCallback, useState } from 'react'
import { Code2, Cpu, Database, Server } from 'lucide-react'

import GlowLine from '@/components/ui/glowline'

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

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

interface TimelineItemData {
  id: string
  title: string
  type: string
  duration: string
  icon: IconType
  responsibilities: Array<string>
  skills: Array<string>
}

const timelineData: Array<TimelineItemData> = [
  {
    id: 'exp-1',
    title: 'Backend Engineer',
    type: 'Full-time',
    duration: '2023 – Present',
    icon: Server,
    responsibilities: [
      'Design & implement scalable APIs with Node.js, NestJS, and PostgreSQL.',
      'Integrate payment systems (SPP billing, invoice generation).',
      'Deploy and maintain microservices with Docker & Kubernetes.',
      'Improve system reliability and performance with monitoring & caching.',
    ],
    skills: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker', 'Kubernetes'],
  },
  {
    id: 'exp-2',
    title: 'Software Developer',
    type: 'Full-time',
    duration: '2020 – 2023',
    icon: Code2,
    responsibilities: [
      'Developed web apps with React, TypeScript, and modern frontend tooling.',
      'Collaborated with designers & analysts to deliver end-to-end solutions.',
      'Built internal dashboards for analytics and executive reporting.',
      'Worked in Agile environment, focusing on clean code and scalability.',
    ],
    skills: ['React', 'TypeScript', 'Express', 'ElasticSearch'],
  },
  {
    id: 'exp-3',
    title: 'System Analyst',
    type: 'Contract',
    duration: '2018 – 2020',
    icon: Database,
    responsibilities: [
      'Gathered and translated business requirements into technical specs.',
      'Designed database schemas and optimized SQL queries.',
      'Coordinated with stakeholders to align technical solutions with goals.',
      'Performed system testing and documentation for ongoing projects.',
    ],
    skills: ['SQL', 'System Analysis', 'Documentation', 'Collaboration'],
  },
  {
    id: 'exp-4',
    title: 'Intern – IT Support & Developer',
    type: 'Internship',
    duration: '2017 – 2018',
    icon: Cpu,
    responsibilities: [
      'Maintained IT infrastructure and provided technical support.',
      'Contributed small features to internal tools and systems.',
      'Learned fundamentals of backend & frontend development.',
    ],
    skills: ['IT Support', 'Basic Web Dev', 'Problem Solving'],
  },
]

interface TimelineItemContentProps {
  item: TimelineItemData
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

interface TimelineItemProps {
  item: TimelineItemData
  expanded: boolean
  onToggle: (id: string) => void
  index: number
}

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
            className="w-full text-left p-6 flex items-center justify-between cursor-pointer"
          >
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-md">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-3 ml-11 text-sm">
                <Badge>{item.type}</Badge>
                <span className="text-gray-400">{item.duration}</span>
              </div>
            </div>
            <span
              className={`text-cyan-400 transition-transform duration-300 ${
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

export function ProfessionalTimeline() {
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
    <section
      id="experience"
      className="relative w-full min-h-screen py-20 px-6 bg-black"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#22d3ee] mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            A timeline of my journey as a developer and engineer
          </p>
        </header>

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
