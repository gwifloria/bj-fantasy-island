import Resume from '@/pages/Resume';
import { RouteObject } from 'react-router-dom';
import Main from '../pages/Main';

type RouteItem = RouteObject & {
  id: string;
};

export const routesList: RouteItem[] = [
  {
    id: '',
    path: '/',
    element: <Main />,
  },
  {
    id: 'ABOUT',
    path: '/about',
    element: <Main />,
  },
  {
    id: 'RESUME',
    path: '/resume',
    element: <Resume />,
  },
  // {
  //   id: 'PHOTOWALL',
  //   path: '/photoWall',
  //   element: <PhotoWall />,
  // },
  // {
  //   id: 'personalLog',
  //   path: '/personalLog',
  //   element: <PersonalLog />,
  // }, {
  //   id: 'todo',
  //   path: '/todo',
  //   element: <Todos />,
  // },
];
