import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from './components/animalpara/data/products.json'
import { Button } from "react-bootstrap";

const ProductPage = ({ setCartItems }) => {

  // 初始化產品數據，為每個產品添加itemCount屬性
  const [products, setProducts] = useState(() =>
    Products.map(id => ({
      ...id,
      itemCount:0
    }))
  );

  const [category, setCategory] = useState();
  const [totalQty, setTotalQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


    // 從 localStorage 加載購物車數據
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      
      // 更新產品數量以匹配購物車
      if (savedCart.length > 0) {
        const updatedProducts = [...products];
        savedCart.forEach(cartItem => {
          const productIndex = updatedProducts.findIndex(p => p.id === cartItem.id);
          if (productIndex !== -1) {
            updatedProducts[productIndex].itemCount = cartItem.quantity;
          }
        });
        setProducts(updatedProducts);
      }
    }, [products]);

  const categoryFilter = (category) => {
    setCategory(category)
  }

  // const filterProducts = Products.filter((product) => {
  //   const matchesCategory = category ? product.category === category : true;
  //   return matchesCategory;
  // })

    // 過濾產品的函數
    const filterProducts = () => {
      return products.filter(product => {
        // 這裡可以根據category和price進行過濾
        // 目前簡單返回所有產品
        return true;
      });
    };

  // const [itemCounts, setItemCounts] = useState(
  //   Products.map(()=>0)
  // );

  const handleQtyChange = (index, delta) => {
    const updatedProducts = [...products];
    updatedProducts[index] = Math.max(0, updatedProducts[index] + delta); // 避免負數

      setProducts(updatedProducts);

  // 更新購物車
      updateCart(updatedProducts);
    };

  // 更新購物車
    const updateCart = (updatedProducts) =>{
      // 只將數量大於0的產品加入購物車
      const cartItems = updatedProducts
      .filter(product => product.itemCount > 0)
      .map(id => ({
        id: products.id,
        product: products.product,
        quantity: products.itemCount,
      }));
      // 更新購物車狀態並保存到localStorage
      updateCart(cartItems);
      localStorage.setItem('cart', JSON.stringify(cartItems));
    };

  // 計算總數和總金額
    useEffect(()=>{
      let qty = 0;
      let price = 0;

      products.forEach(product => {
        qty += product.itemCount;
        price += product.itemCount * parseFloat(product.price);
      });

      setTotalQty(qty);
      setTotalPrice(price);
    },[products]);

  // const totalQty = itemCounts.reduce((acc, count) => acc + count, 0);
  // const totalPrice = itemCounts.reduce(
  //   (acc, count, index) => acc + count * Number(Products[index].price),
  //   0
  // );

  return (
    <>
      <div className=" bg-info bg-opacity-50">
        <div className="container">
          <div className="row py-3">
            <div className="row py-3">
              <div className="col-12 col-lg-6">
                <div className="filterArea">
                  <Button onClick={() => categoryFilter("")}>所有商品</Button>
                  <Button onClick={() => categoryFilter("dog")}>犬類飼料</Button>
                  <Button onClick={() => categoryFilter("cat")}>貓咪飼料</Button>
                  <Button onClick={() => categoryFilter("little")}>小型動物飼料</Button>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                搜尋:
                <input />
              </div>
              <div className="col-12 col-lg-3">
              目前件數：{totalQty} | 目前金額：${totalPrice}
              </div>
            </div>
            {/* {Products.map((v, i) => ( */}
            {
              filterProducts().map((v, i) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={v.id}>
                  <Link to={`./${v.id}`}>
                    <div className="bg-success rounded-circle bg-opactity-25">
                      <img src={v.image} alt={v.product} className="w-100" />
                    </div>
                    <p style={{ textAlign: "center" }}>{v.product}<br />
                      ${v.price}</p>
                  </Link>
                                      <td><Button onClick={() => handleQtyChange(i, 1)}>+</Button></td>
                                      <td><input value={v.itemCount[i]} readOnly /></td>
                                      <td><Button onClick={() => handleQtyChange(i, -1)}>-</Button></td>
                </div>
              ))
            }
          </div>
        </div></div>
    </>
  )
}

export default ProductPage;