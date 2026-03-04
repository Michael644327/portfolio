// import { Routes, Route } from "react-router-dom";
// import APLayout from "../../layout/animalParaLayout";
import AnimalPara from '../../projects/animalpara/index';
import AboutPage from '../../projects/animalpara/about';
import ContactPage from '../../projects/animalpara/contact';
import FunnyPage from '../../projects/animalpara/funny';
import ProductPage from '../../projects/animalpara/product';
import ProductDetailPage from '../../projects/animalpara/product/[product_id]';
import StorePage from '../../projects/animalpara/store';

export const apRoutes = [
  {
    index: true,
    element: <AnimalPara />,
    meta: { label: '首頁' },
    showInNav: true,
  },
  {
    path: "about",
    element: <AboutPage />,
    meta: {
      label: "關於動物", name: "關於動物",
    },
    showInNav: true,
  },
  {
    path: "funny", element: <FunnyPage />,
    meta: {
      label: "動物趣聞", name: "動物趣聞", h2Title: true,
    },
    showInNav: true,
  },
  {
    path: "store", element: <StorePage />,
    meta: {
      label: "門市介紹", name: "門市介紹", h2Title: true,
    },
    showInNav: true,
  },
  {
    path: "product", element: <ProductPage />,
    meta: {
      label: "商品一覽", name: "商品一覽", h2Title: true,
    },
    showInNav: true,
  },
  {
    path: "contact", element: <ContactPage />,
    meta: {
      label: "聯絡我們", name: "聯絡我們", h2Title: true,
    },
    showInNav: true,
  },
  {
    path: "product/:product_id", element: <ProductDetailPage />,
  }
];
