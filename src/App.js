import React,{useState} from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Home from './components/Home'
import OrderSuccessful from './components/OrderSuccessful';
function App() {
  
  return (<>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/order" component={OrderSuccessful} />

      </Switch>
    </BrowserRouter>
  </>);
}

export default App;
