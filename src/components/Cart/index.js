import React from "react";
import CartItem from "../CartItem";
import "./style.css";

function Cart(props) {

  const {productList} = props

  return (
    <div className="carrito">
      <h2>Carrito</h2>
      {productList.length < 1 ? <></> : <ul className="cart">
        {productList.map((product, key) => {
          return (
            <CartItem product={product} key={key}/>
          )
        })}
      </ul>}      
    </div>
  )
}

export default Cart