import React from "react";
import "./style.css";

function TotalContainer(props) {

  const { productList } = props

  return (
    <div className="totalContainer">
      <h2>Total</h2>
      <div className="totalInfo">
        <span><p>Cantidad de productos:</p> <p>{productList.length}</p></span>
        <span><p>Total:</p> <p>${productList.reduce((a, productList) => a + productList.price, 0)}</p></span>
      </div>
    </div>
  )
}

export default TotalContainer