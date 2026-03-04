import HomePage from '../../projects/UIDemos/hex-blog/pages/hex-home';
import BlogPage from '../../projects/UIDemos/hex-blog/pages/hex-blog';
import ArtiPage from '../../projects/UIDemos/hex-blog/pages/hex-article';

export const uiRoutes = [
  {
    index: true,
    element: <HomePage />,
    meta: { label: '首頁' },
    showInNav: true,
  },
  {
    path: "blog",
    element: <BlogPage />,
    meta: {
      label: "網誌", name: "網誌",
    },
    showInNav: false,
  },
  {
    path: "article", element: <ArtiPage />,
    meta: {
      label: "文章", name: "文章", h2Title: true,
    },
    showInNav: false,
  }
];
