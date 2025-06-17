import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Products from '../../components/animalpara/data/products.json'
import { Button } from "react-bootstrap";

const ProductPage = () => {

  const [category, setCategory] = useState();
  const [price, setPrice] = useState("");

  const categoryFilter = (category) => {
    setCategory(category)
  }

  const filterProducts = Products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    return matchesCategory;
  })

  const [itemCounts, setItemCounts] = useState(
    Products.map(()=>0)
  );

  const handleQuantityChange = (index, delta) => {
    setItemCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(0, newCounts[index] + delta); // 避免負數
      return newCounts;
    });
  };

  const totalQty = itemCounts.reduce((acc, count) => acc + count, 0);
  const totalPrice = itemCounts.reduce(
    (acc, count, index) => acc + count * Number(Products[index].price),
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
                                      <td><Button onClick={() => handleQuantityChange(i, 1)}>+</Button></td>
                                      <td><input value={itemCounts[i]} readOnly /></td>
                                      <td><Button onClick={() => handleQuantityChange(i, -1)}>-</Button></td>
                </div>
              ))
            }
          </div>
        </div></div>
    </>
  )
}

export default ProductPage;