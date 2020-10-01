import React from "react";
import "./style.css";

function SecondaryProduct(props) {

  const { name, price } = props.props;

  function handleClick() {
    props.handleClick(name, price)
  }
  
  return (
    <div className="secondaryProduct" onClick={handleClick}>
      <h3>{name}</h3>
      <h3>${price}</h3>
    </div>
  )
}

export default SecondaryProduct