import {
  Forklift,
  GraduationCap,
  Landmark,
  Newspaper,
  Smartphone,
  Sparkles,
  TrainFront,
} from 'lucide-react'
import React from 'react'
import type { FC, ReactNode, SVGProps } from 'react'

import GlowLine from '@/components/ui/glowline'

const cn = (...inputs: Array<string | boolean | undefined | null>) => {
  return inputs.filter(Boolean).join(' ')
}

interface BentoGridProps {
  children: ReactNode
  className?: string
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

type Project = {
  Icon: FC<SVGProps<SVGSVGElement>>
  name: string
  description: string
  href: string
  cta: string
  background: ReactNode
}

const projects: Array<Project> = [
  {
    Icon: Smartphone,
    name: 'Super App POLRI',
    description:
      'Mobile app for Indonesian National Police with millions of downloads. Focus on scalability, security & performance.',
    href: 'https://play.google.com/store/apps/details?id=superapps.polri.presisi.presisi&hl=id',
    cta: 'See App',
    background: (
      <div className="absolute inset-0 bg-cyan-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: Newspaper,
    name: 'kuatbaca.com',
    description:
      'News portal with custom CMS. Features SEO optimization, ad integration, analytics & user auth.',
    href: 'https://kuatbaca.com',
    cta: 'Explore Site',
    background: (
      <div className="absolute inset-0 bg-purple-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: GraduationCap,
    name: "I'm Pharmachist",
    description:
      'E-learning platform for pharmacy students. Interactive courses, quizzes & progress tracking.',
    href: 'https://im-pharmacist.com',
    cta: 'See Platform',
    background: (
      <div className="absolute inset-0 bg-pink-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: Forklift,
    name: 'GLID: Logistics System',
    description:
      'Logistics management system for POS Indonesia. Real-time tracking, route optimization & inventory control.',
    href: 'https://www.glid.id/id',
    cta: 'See System',
    background: (
      <div className="absolute inset-0 bg-indigo-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: Landmark,
    name: 'CEISA 4.0',
    description:
      'Customs & excise information system for Indonesian government. Features document management, reporting & compliance tracking.',
    href: 'https://portal.beacukai.go.id',
    cta: 'See System',
    background: (
      <div className="absolute inset-0 bg-indigo-950/30 blur-2xl animate-pulse" />
    ),
  },
  {
    Icon: TrainFront,
    name: 'Executive Dashboard',
    description:
      'Executive dashboard for LRT Jabodebek (PT KAI). Real-time monitoring, analytics & reporting for operations management.',
    href: '#',
    cta: 'See System',
    background: (
      <div className="absolute inset-0 bg-indigo-950/30 blur-2xl animate-pulse" />
    ),
  },
]

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

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-20 gap-y-10">
        <div className="relative max-w-3xl mx-auto text-center z-10 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-cyan-400 drop-shadow-[0_0_8px_#06b6d4]" />
            <h2 className="projects-title text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_#9333EA]">
              Projects
            </h2>
          </div>
          <p className="projects-desc mt-3 text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
            A selection of impactful projects showcasing scalability, security,
            and performance across industries.
          </p>
        </div>
        <div className="relative max-w-7xl min-h-fit px-2 md:px-0 mx-auto">
          <BentoGrid>
            {projects.map((project, idx) => {
              const pos = (idx % 4) + 1
              const isBig = pos === 1 || pos === 4
              return (
                <BentoCard
                  key={idx}
                  className={isBig ? 'lg:col-span-2' : 'lg:col-span-1'}
                  {...project}
                />
              )
            })}
          </BentoGrid>
        </div>
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

export default Projects
