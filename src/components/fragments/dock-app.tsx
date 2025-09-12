import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import {
  Briefcase,
  CpuIcon,
  FolderGit2,
  GraduationCap,
  Home,
  Mail,
  User,
} from 'lucide-react'
import { Children, cloneElement, isValidElement, useRef, useState } from 'react'
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react'
import type { MotionValue } from 'framer-motion'

interface DockIconProps {
  mouseX?: MotionValue<number>
  children: ReactNode
  onClick?: () => void
  label?: string
}

interface DockProps {
  children: ReactNode
}

const DockIcon: FC<DockIconProps> = ({ mouseX, children, onClick, label }) => {
  const ref = useRef<HTMLDivElement>(null)
  const defaultMouseX = useMotionValue(Infinity)
  const [isHovered, setIsHovered] = useState(false)

  const iconSize = 40
  const iconMagnification = 64
  const iconDistance = 150

  const distance = useTransform(mouseX ?? defaultMouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distance,
    [-iconDistance, 0, iconDistance],
    [iconSize, iconMagnification, iconSize],
  )

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const handleClick = (e: MouseEvent) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div className="relative flex flex-col items-center">
      <motion.div
        ref={ref}
        style={{ width }}
        className="flex aspect-square items-center justify-center rounded-2xl bg-gray-800/90 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-sm border border-gray-700/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className="flex h-full w-full items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {children}
        </span>
      </motion.div>

      <AnimatePresence>
        {isHovered && label && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 6, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute -top-8 px-2 py-1 rounded-md bg-black/80 text-white text-xs shadow-lg pointer-events-none whitespace-nowrap"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FloatingDock: FC<DockProps> = ({ children }) => {
  const mouseX = useMotionValue(Infinity)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="flex h-[70px] items-center gap-1 md:gap-3 rounded-3xl bg-black/40 px-2 md:px-4 border border-white/10 backdrop-blur-xl shadow-2xl"
      style={{
        boxShadow:
          '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      {Children.map(children, (child) => {
        if (isValidElement(child) && child.type === DockIcon) {
          return cloneElement(child as ReactElement<DockIconProps>, {
            ...(child.props as DockIconProps),
            mouseX: mouseX,
          })
        }
        return child
      })}
    </motion.div>
  )
}

const DockApp: FC = () => {
  const icons = [
    { id: 'hero', name: 'Home', component: Home },
    { id: 'about', name: 'About', component: User },
    { id: 'skills', name: 'Skills', component: CpuIcon },
    { id: 'projects', name: 'Projects', component: FolderGit2 },
    { id: 'experience', name: 'Experience', component: Briefcase },
    { id: 'education', name: 'Education', component: GraduationCap },
    { id: 'contact', name: 'Contact', component: Mail },
  ]

  return (
    <div className="flex flex-col items-center justify-end bg-inherit font-sans">
      <FloatingDock>
        {icons.map((icon) => (
          <DockIcon
            key={icon.id}
            label={icon.name}
            onClick={() => {
              const element = document.getElementById(icon.id)
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            <icon.component className="h-full w-full p-2 text-white drop-shadow-sm" />
          </DockIcon>
        ))}
      </FloatingDock>
    </div>
  )
}

export default DockApp
