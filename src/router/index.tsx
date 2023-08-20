import { RouteObject } from "react-router-dom";
import Main from "../pages/Main";
import PersonalLog from "../pages/PersonalLog";
import PhotoWall from "../pages/PhotoWall";
import PersonalCenter from "@/pages/PersonalCenter";
import { Todos } from "@/pages/Todos";

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
  }, {
    id: 'todo',
    path: '/todo',
    element: <Todos />,
  }, {
    id: 'personalCenter',
    path: '/personalCenter',
    element: <PersonalCenter />,
  },
]

