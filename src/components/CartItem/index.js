import React from "react";
import "./style.css"

function CartItem(props) {

  const {name, price} = props.product

  return(
    <li className="cartItem"><span>{name}</span> <span>${price}</span></li>
  )
}

export default CartItem