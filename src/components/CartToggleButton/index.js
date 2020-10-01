import React from "react";
import "./style.css";

function CartToggleButton(props) {

  function handleClick() {
    props.handleClick();
  }

  return (
    <button onClick={handleClick} className="botoneta">Ver carrito</button>
  )
}

export default CartToggleButton