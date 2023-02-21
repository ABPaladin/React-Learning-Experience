import './App.css';
import { products } from './data/data';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import React from 'react';

function App() {
  
  const [cart, setCart] = React.useState([]);
  const add2Cart = (product) => {
    setCart([...cart, product])
   
    let productExists = cart.filter(p => p.id === product.id)
    console.log(productExists)
    if (productExists.length) {
      // setCart(...cart, {...product, qnt: qnt +=1})
      setCart(cart.map(p => {
        if(p.id === product.id){
          return {...p, qnt: p.qnt +=1}
        }else {
          return p
        }
      }))
    } else {
      setCart([...cart, {...product, qnt: 1}])
    }
    console.log(cart)
  }

  return (
    <div className="App">
      <Catalog products={products} add2Cart={add2Cart}/>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
