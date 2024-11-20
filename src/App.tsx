// import ListGroup from "./components/ListGroup/ListGroup";
// import { FaCalendar } from "react-icons/fa";
//import Button from './components/Button/Button';
//import Like from './components/Like';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState(['Product1', 'Product2']);


  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])}/>
    </div>
  );
}

export default App;



