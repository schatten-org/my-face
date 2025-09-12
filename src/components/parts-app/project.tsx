'use client'
import React from 'react'
import { Cpu, GraduationCap, LayoutDashboard, Smartphone } from 'lucide-react'
import type { FC, ReactNode, SVGProps } from 'react'

import GlowLine from '@/components/ui/glowline'

const cn = (...inputs: Array<string | boolean | undefined | null>) => {
  return inputs.filter(Boolean).join(' ')
}

interface BentoGridProps {
  children: ReactNode
  className?: string
}

const BentoGrid: FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface BentoCardProps {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl border border-cyan-400/20',
      'bg-black/60 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_#06b6d4]',
      'transition-all duration-300',
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <Icon className="h-12 w-12 text-cyan-400 drop-shadow-[0_0_6px_#06b6d4]" />
      <h3 className="text-xl font-bold text-white">{name}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
    <div
      className={cn(
        'absolute bottom-0 flex w-full translate-y-10 transform p-4 opacity-0',
        'transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <a
        href={href}
        className="pointer-events-auto text-sm font-semibold text-cyan-400 hover:text-pink-400 flex items-center gap-2"
      >
        {cta}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-40 group-hover:opacity-60 transition-all" />
  </div>
)

type Project = {
  Icon: FC<SVGProps<SVGSVGElement>>
  name: string
  description: string
  href: string
  cta: string
  className: string
  background: ReactNode
}

const projects: Array<Project> = [
  {
    Icon: Smartphone,
    name: 'Super App POLRI',
    description:
      'Mobile app for Indonesian National Police with millions of downloads. Focus on scalability, security & performance.',
    href: '#',
    cta: 'View Case Study',
    className: 'lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-cyan-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: LayoutDashboard,
    name: 'Executive Dashboard',
    description:
      'Business Intelligence dashboard for decision makers. PostgreSQL + Elasticsearch + data visualization.',
    href: '#',
    cta: 'See Demo',
    className: 'lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-purple-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: GraduationCap,
    name: 'School Management System',
    description:
      'End-to-end school system: SPP payments, classes, materials, attendance & grades. Includes invoice generation.',
    href: '#',
    cta: 'Read More',
    className: 'lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-pink-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: Cpu,
    name: 'Cloud & Infra Projects',
    description:
      'Microservices deployed with Docker & Kubernetes. CI/CD pipelines (Jenkins) & scalable infra setup.',
    href: '#',
    cta: 'Explore Infra',
    className: 'lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-indigo-950/30 blur-2xl animate-pulse" />
    ),
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 px-6 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#9333EA] mb-16">
          ⚡ Featured Projects
        </h2>
        <BentoGrid>
          {projects.map((project, idx) => (
            <BentoCard key={idx} {...project} />
          ))}
        </BentoGrid>
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
