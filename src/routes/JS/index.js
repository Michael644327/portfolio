import { jsRoutes } from './routes';
import BaseLayout from '../../layout/baselayout';

export const jsRouteConfig = {
  path: '/jsdemos',
  element: <BaseLayout />,
  children: jsRoutes
};

export { jsRoutes };