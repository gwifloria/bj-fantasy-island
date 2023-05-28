import { RouteObject, createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import PersonalLog from "../pages/PersonalLog";
import PhotoWall from "../pages/PhotoWall";
import { uniqueId } from 'lodash'

type RouteItem = RouteObject & {
  id: string
}
export const routesList: RouteItem[] = [
  {
    id: uniqueId('main'),
    path: '/',
    element: <Main />,
  },
  {
    id: uniqueId('photoWall'),
    path: '/photoWall',
    element: <PhotoWall />,
  }, {
    id: uniqueId('personalLog'),
    path: '/personalLog',
    element: <PersonalLog />,
  },
]

export const router = createBrowserRouter(routesList);
