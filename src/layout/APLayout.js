import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavbarAP from "../projects/animalpara/components/navbar/navbarAP";
import Footer from "../components/footer"

export default function APLayout() {

  const [cartItems, setCartItems] = useState([]);

  // 加入商品 / 增加數量
  const addToCart = (product) => {
    setCartItems(prev => {
      const exist = prev.find(item => item.id === product.id)

      if (exist) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      }

      return [...prev, { ...product, qty: 1 }]
    })
  }

  // 減少商品
  const decreaseQty = (id) => {
    setCartItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    )
  }

  return (
    <>
      <div className="app-container">
        <NavbarAP
          cartItems={cartItems}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
        />
        <div className="main-container">
          <Outlet
            cartItems={cartItems}
            addToCart={addToCart}
            decreaseQty={decreaseQty} />
        </div>
        <Footer />
      </div>
    </>
  )
}
