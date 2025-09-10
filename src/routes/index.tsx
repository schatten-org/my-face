import { createFileRoute } from '@tanstack/react-router'

import { lazy } from 'react'
import { Fragment } from 'react/jsx-runtime'

const About = lazy(() => import('@/components/parts-app/about'))
const Hero = lazy(() => import('@/components/parts-app/hero'))
const Skill = lazy(() => import('@/components/parts-app/skill'))

export const Route = createFileRoute('/')({
  component: App,
})

export default function App() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Skill />
    </Fragment>
  )
}
