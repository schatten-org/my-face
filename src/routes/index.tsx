import { createFileRoute } from '@tanstack/react-router'

import { lazy } from 'react'
import { Fragment } from 'react/jsx-runtime'

const About = lazy(() => import('@/components/parts-app/about'))
const Skill = lazy(() => import('@/components/parts-app/skill'))
const Hero = lazy(() => import('@/components/parts-app/hero'))
const Projects = lazy(() => import('@/components/parts-app/project'))
const Experience = lazy(() => import('@/components/parts-app/experience'))
const Education = lazy(() => import('@/components/parts-app/education'))
const Contact = lazy(() => import('@/components/parts-app/contact'))

export const Route = createFileRoute('/')({
  component: App,
})

export default function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </Fragment>
  )
}
