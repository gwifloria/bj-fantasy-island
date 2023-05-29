import { RouteObject } from "react-router-dom";
import Main from "../pages/Main";
import PersonalLog from "../pages/PersonalLog";
import PhotoWall from "../pages/PhotoWall";

type RouteItem = RouteObject & {
  id: string
}
export const routesList: RouteItem[] = [
  {
    id: 'main',
    path: '/main',
    element: <Main />,
  },
  {
    id: 'photoWall',
    path: '/photoWall',
    element: <PhotoWall />,
  }, {
    id: 'personalLog',
    path: '/personalLog',
    element: <PersonalLog />,
  },
]

