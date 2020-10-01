import React from "react";
import "./style.css";

function MainProduct(props) {

  const { name, price } = props.props;

  function handleClick() {
    props.handleClick(name, price)
  }

  return (
    <div className="mainProduct" onClick={handleClick}>
      <h1 className="name">{name}</h1>
      <h2 className="price">${price}</h2>
    </div>
  )
}

export default MainProduct