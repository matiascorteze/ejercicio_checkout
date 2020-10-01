import React, {useState} from 'react';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
import TotalContainer from './components/TotalContainer';

function App() {

  const [productList, setProductList] = useState([])
  const [toggle, setToggle] = useState(true)

  function handleInfo(name, price) {
    const product = {
      name,
      price
    }

    const tempState = [
      ...productList
    ]

    tempState.push(product)

    setProductList(tempState)
  }

  function handleToggle() {
    toggle === false ? setToggle(true) : setToggle(false);
  }

  return (
    <div className="App">
      <Navbar handleToggle={handleToggle}/>
      <ProductContainer handleInfo={handleInfo}/>
      <div className="line"></div>
      {toggle === false ? <></> : <div className="cartContainer">
        <Cart productList={productList}/>
        <TotalContainer productList={productList}/>
      </div>}
      
    </div>
  );
}

export default App;
