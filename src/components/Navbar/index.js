import React from "react";
import CartToggleButton from "../CartToggleButton";
import "./style.css";

function Navbar(props) {

  function handleClick() {
    props.handleToggle()
  }

  return (
    <div className="navbar">
      <h2 className="logo">ShopIt</h2>
      <CartToggleButton handleClick={handleClick}/>
    </div>
  )
}

export default Navbar