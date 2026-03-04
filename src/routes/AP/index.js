// import Home from '../pages/Home';
import APLayout from '../../layout/APLayout'
import { apRoutes } from './routes';

export const apRouteConfig = {
  path: '/animalpara',
  element: <APLayout />,
  children: apRoutes
};

export { apRoutes };