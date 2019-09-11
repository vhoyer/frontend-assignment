import { routes } from './routes'

export const allRouteNames = () => {
  const iterateChildrens = (acc, cur) => {
    if (cur.name) {
      acc.push(cur.name)
    }

    if (cur.children) {
      acc.push(...cur.children.reduce(iterateChildrens, []))
    }

    return acc
  }

  const routeNames = routes.reduce(iterateChildrens, [])

  return routeNames
}

