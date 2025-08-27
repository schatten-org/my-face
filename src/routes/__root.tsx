import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import { Fragment } from 'react/jsx-runtime'

import type { QueryClient } from '@tanstack/react-query'

import WindowsXPLayout from '@/layouts/WindowsXPLayout'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <Fragment>
      <WindowsXPLayout>
        <Outlet />
      </WindowsXPLayout>
    </Fragment>
  ),
})
