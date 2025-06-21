import { Routes, Route } from "react-router-dom";
import AnimalParaLayout from "./animalParaLayout";
import AnimalPara from '../projects/animalpara/index';
import AboutPage from '../projects/animalpara/about';
import ContactPage from '../projects/animalpara/contact';
import FunnyPage from '../projects/animalpara/funny';
import ProductPage from '../projects/animalpara/product';
import ProductDetailPage from '../projects/animalpara/product/[product_id]';
import StorePage from '../projects/animalpara/store';

export const routesAPData = [
    {
      path: "/animalpara", element: AnimalPara,
      proj: "AnimalPara", title: "動物樂園", name: "首頁"
    },
    {
      path: "/animalpara/about", element: AboutPage,
      proj: "AnimalPara", title: "關於動物", name: "關於動物"
    },
    {
      path: "/animalpara/funny", element: FunnyPage,
      proj: "AnimalPara", title: "動物趣聞", name: "動物趣聞", h2Title: "true"
    },
    {
      path: "/animalpara/store", element: StorePage,
      proj: "AnimalPara", title: "門市介紹", name: "門市介紹", h2Title: "true"
    },
    {
      path: "/animalpara/product", element: ProductPage,
      proj: "AnimalPara", title: "商品一覽", name: "商品一覽", h2Title: "true"
    },
    {
      path: "/animalpara/contact", element: ContactPage,
      proj: "AnimalPara", title: "聯絡我們", name: "聯絡我們", h2Title: "true"
    },
    {
      path: "/animalpara/product/:product_id", element: ProductDetailPage,
      proj: "AnimalPara"
    }
]

export default function AnimalShopRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AnimalParaLayout />}>
        <Route index element={<AnimalPara />} title="動物樂園" name="首頁" />
        <Route path="about" element={<AboutPage />} title="關於動物" name="關於動物" />
        <Route path="funny" element={<FunnyPage />} title="動物趣聞" name="動物趣聞" />
        <Route path="store" element={<StorePage />} title="門市介紹" name="門市介紹" />
        <Route path="product" element={<ProductPage />} title="商品一覽" name="商品一覽" />
        <Route path="product/:product_id" element={<ProductDetailPage />} />
        <Route path="contact" element={<ContactPage />} title="聯絡我們" name="聯絡我們" />
      </Route>
    </Routes>

  )
}
