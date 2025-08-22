import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from './components/animalpara/data/products.json'
import { Button } from "react-bootstrap";
import { useMemo } from "react";


const ProductPage = ({ setCartItems }) => {

  //商品排序，以及filter用
  const useSortId = (id, sortKey = "id") => {
    const sortedProducts = useMemo(() => {
      return [...id].sort((a, b) => a[sortKey] - b[sortKey]);
    }, [id, sortKey]);

    return sortedProducts;
  };
  const sortedProducts = useSortId(Products, "id");

  //分類filter用
  const [category, setCategory] = useState("");
  const categoryFilter = (category) => {
    setCategory(category)
  }

  const filterProducts = sortedProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    return matchesCategory;
  })

  // 初始化產品數據，為每個產品添加itemCount屬性
  const [itemCounts, setItemCounts] = useState(() =>
    sortedProducts.reduce((acc, product, index) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  //數量增減用
  const handleQtyChange = (productId, delta) => {
    setItemCounts((prevCounts) => ({
      //const newCounts = [...prevCounts];
      //newCounts[productId] = Math.max(0, newCounts[productId] + delta); // 避免負數
      //return newCounts;
      ...prevCounts,
      [productId]: Math.max(0, (prevCounts[productId] || 0) + delta)
    }))
  };
  const totalQty = Object.values(itemCounts).reduce((acc, count) => acc + count, 0);
  const totalPrice = filterProducts.reduce(
    (acc, product) => acc + (itemCounts[product.id] || 0) * Number(product.price),
    0
  );



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
              filterProducts.map((v, i) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-3" key={v.id}>
                  <Link to={`./${v.id}`}>
                    <div className="bg-success rounded-circle bg-opactity-25">
                      <img src={v.image} alt={v.product} className="w-100" />
                    </div>
                    <p style={{ textAlign: "center" }}>{v.product}<br />
                      ${v.price}</p>
                  </Link>
                  <div className="itemcount">
                  <Button onClick={() => handleQtyChange(v.id, 1)}>+</Button>
                  <input value={itemCounts[v.id] || 0} readOnly />
                  <Button onClick={() => handleQtyChange(v.id, -1)}>-</Button>
                  </div>
                </div>
              ))
            }
          </div>
        </div></div>
    </>
  )
}

export default ProductPage;