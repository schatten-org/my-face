import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'

import type { QueryClient } from '@tanstack/react-query'

import DefaultLayout from '@/layouts/default-layout'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  ),
})
