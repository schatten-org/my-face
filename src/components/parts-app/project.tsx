import { Globe, MonitorDot, Smartphone, Sparkles } from 'lucide-react'
import type { FC, ReactNode } from 'react'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import GlowLine from '@/components/ui/glowline'
import Marquee from '@/components/ui/marquee'
import Modal from '@/components/ui/modal'
import type { Project as ProjectType } from '@/data/data-project'
import { projects } from '@/data/data-project'
import { cn } from '@/lib/utils'

interface BentoGridProps {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends Omit<ProjectType, 'detail'> {
  className: string
  onClick?: () => void
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

const BentoCard: FC<BentoCardProps> = ({
  id,
  title,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  onClick,
}) => (
  <div
    key={id}
    onClick={onClick}
    className={cn(
      'group relative flex flex-col justify-between overflow-hidden rounded-xl border border-cyan-400/20',
      'bg-black/60 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_#06b6d4]',
      'transition-all duration-300',
      className,
    )}
  >
    <div>{background}</div>
    <div className="z-10 flex flex-col gap-2 p-6 transition-all duration-300 group-hover:-translate-y-6">
      <Icon className="h-12 w-12 text-cyan-400 drop-shadow-[0_0_6px_#06b6d4]" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-1">
        {description}
      </p>
    </div>
    <div
      className={cn(
        'absolute bottom-0 flex w-full translate-y-10 transform p-4 opacity-0',
        'transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-sm font-semibold text-cyan-400 hover:text-pink-400 flex items-center gap-2 z-50 cursor-pointer"
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
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-40 group-hover:opacity-60 transition-all" />
  </div>
)

const Projects = () => {
  const [modal, setModal] = React.useState<{
    isOpen: boolean
    project?: ProjectType
  }>({ isOpen: false })

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
            A bunch of projects I somehow convinced myself (and sometimes
            others) were production-ready. Some even had a little “AI magic”
            sprinkled in and miraculously, a few of them still work 🙌
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
                  className={`${isBig ? 'lg:col-span-2' : 'lg:col-span-1'} cursor-zoom-in`}
                  onClick={() =>
                    setModal((prev) => ({
                      ...prev,
                      isOpen: true,
                      project,
                    }))
                  }
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
      <Modal
        isOpen={modal.isOpen}
        onClose={() =>
          setModal((prev) => ({ ...prev, isOpen: false, project: undefined }))
        }
        title={modal.project?.title}
        animation="bounce"
        size="xl"
      >
        <div className="w-full h-fit flex flex-col text-gray-900">
          <div className="w-full h-full md:h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden flex items-center justify-center">
            <LazyLoadImage
              alt="Project Image"
              src={modal.project?.details.images || '/images/example.png'}
              effect="opacity"
              wrapperProps={{
                style: { transitionDelay: '1s' },
              }}
              className="object-cover object-center"
            />
          </div>

          <div className="w-full h-fit py-2 flex flex-col gap-y-2">
            <span className="text-sm text-gray-500">
              {modal.project?.details.duration}
            </span>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-800">
                {['Company'].includes(modal.project?.details.type as string)
                  ? `Under ${modal.project?.details.company}`
                  : ['Freelance'].includes(
                        modal.project?.details.type as string,
                      )
                    ? `Freelance`
                    : modal.project?.details.type}
              </h4>
              <div className="flex items-center space-x-1.5">
                {modal.project?.details.platform === 'Web App' ? (
                  <Globe className="h-4 w-4 text-gray-600" />
                ) : modal.project?.details.platform === 'Mobile App' ? (
                  <Smartphone className="h-4 w-4 text-gray-600" />
                ) : modal.project?.details.platform === 'Desktop App' ? (
                  <MonitorDot className="h-4 w-4 text-gray-600" />
                ) : null}
                <span className="text-sm text-gray-600 font-semibold">
                  {modal.project?.details.platform}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-semibold text-gray-800">
                Technologies Used:
              </h4>
              <Marquee
                className="bg-inherit rounded-lg"
                pauseOnHover
                children={modal.project?.details.tech.map((x, index) => (
                  <a
                    key={index}
                    href={x.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-50 text-cyan-800 rounded-full text-sm font-medium px-4 py-2 whitespace-nowrap hover:bg-cyan-100 transition-all flex items-center gap-1 hover:shadow-lg hover:scale-105 transform duration-200 hover:text-cyan-600"
                  >
                    <img
                      src={x.image}
                      alt={x.name}
                      className="inline-block h-5 w-5"
                    />
                    <span>{x.name}</span>
                  </a>
                ))}
              />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              {modal.project?.description}
            </p>
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default Projects
