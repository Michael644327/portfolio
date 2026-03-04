import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Products from '../data/animal-products.json'
import useSortId from "./dataSort";
import { Button } from "react-bootstrap";

const ProductPage = ({setCartItems}) => {

  // const [price, setPrice] = useState("");

  const sortedProducts  = useSortId(Products, "id");

  const [itemCounts, setItemCounts] = useState(
    Products.map(()=>0)
  );

  //數量增減
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

  //商品分類filter
  const [category, setCategory] = useState();
  const categoryFilter = (category) => {
    setCategory(category)
  }
  const filterProducts = sortedProducts.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    return matchesCategory;
  })


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
              <div className="col-12 col-lg-6">
                搜尋:
                <input />
              </div>
            </div>
            目前件數：{totalQty} | 目前金額：${totalPrice}
            {/* {Products.map((v, i) => ( */}
            <table><tbody>
              {
                filterProducts.map((v, i) => (

                  <tr className="" key={v.id}>
                  <td>{v.id}</td>
                    <td>{v.product}</td>
                    <td>${v.price}</td>
                    <td>{v.category}</td>
                    <td><Button onClick={() => handleQuantityChange(i, 1)}>+</Button></td>
                    <td><input value={itemCounts[i]} readOnly /></td>
                    <td><Button onClick={() => handleQuantityChange(i, -1)}>-</Button></td>
                  </tr>
                ))
              }
            </tbody></table>
          </div>
        </div></div>
    </>
  )
}

export default ProductPage;