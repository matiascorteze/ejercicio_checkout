import React from "react";
import MainProduct from "../MainProduct";
import SecondaryProduct from "../SecondaryProduct";
import "./style.css";

function ProductContainer(props) {

  const mainProduct = {
    "name": "Cafetera",
    "price": 1000
  }

  const secondaryProducts = [
    {
      "name": "Tostadora",
      "price": 750
    },
    {
      "name": "Licuadora",
      "price": 400
    }
  ]

  function handleClick(name, price) {
    props.handleInfo(name, price)
  }

  return (
    <div className="productList">
      <MainProduct props={mainProduct} handleClick={handleClick} />
      <div className="secondList">
      {secondaryProducts.map((prod, key) => {
        return (<SecondaryProduct props={prod} key={key} handleClick={handleClick}/>)
      })}
      </div>
    </div>
  )
}

export default ProductContainer