// import Home from '../pages/Home';
import FBLayout from '../../layout/BlogLayout'
import { uiRoutes } from './routes';

export const uiRouteConfig = {
  path: '/hex',
  element: <FBLayout />,
  children: uiRoutes
};

export { uiRoutes };