import { createHashRouter } from "react-router-dom";
import BaseLayout from "../layout/baselayout";
import { apRouteConfig } from "./AP"
import { jsRouteConfig } from "./JS"

export const router = createHashRouter([{
  path: "/",
  children: [
    {
      index: true, element: <BaseLayout />
    },
    apRouteConfig,
    jsRouteConfig,
  ],
},
]);

export { apRouteConfig, jsRouteConfig };
export { apRoutes } from './AP';
export { jsRoutes } from './JS';

export const mainNavConfig = [
  {
    label: '首頁',
    path: '/',
    type: 'link',
    showInNav: true,
  },
  {
    label: '功能練習',
    type: 'dropdown',
    showInNav: true,
    children: 'js',
  },
  {
    label: '作品集',
    type: 'dropdown',
    showInNav: true,
    children: [
      { label: '動物樂園', path: '/animalpara', type: 'link' },
      // { label: '切版練習', path: '/hex', type: 'link' }
    ],
  },
  {
    label: 'VUE練習',
    type: 'external',
    showInNav: true,
    href: '#/123',
  }
]