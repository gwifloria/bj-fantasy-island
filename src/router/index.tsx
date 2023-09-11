import { RouteObject } from "react-router-dom";
import Main from "../pages/Main";
import PersonalLog from "../pages/PersonalLog";
import Resume from "@/pages/Resume"
import PhotoWall from "../pages/PhotoWall";
import { Todos } from "@/pages/Todos";

type RouteItem = RouteObject & {
  id: string
}

export const routesList: RouteItem[] = [
  {
    id: '',
    path: '/',
    element: <Main />,
  },
  {
    id: 'about',
    path: '/about',
    element: <Main />,
  },
  {
    id: 'resume',
    path: '/resume',
    element: <Resume />,
  },
  {
    id: 'photoWall',
    path: '/photoWall',
    element: <PhotoWall />,
  }, {
    id: 'personalLog',
    path: '/personalLog',
    element: <PersonalLog />,
  }, {
    id: 'todo',
    path: '/todo',
    element: <Todos />,
  },
]

