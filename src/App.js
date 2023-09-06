import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './Components/Header'
import Home from './Components/Home';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Login from './Components/Login';
import ProductDetail from './Components/ProductDetail';
import CategoryProduct from './Components/CategoryProduct';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/cart/:cartID'>
            <Cart />
          </Route>
          <Route exact path='/wishlist/:wishlistID'>
            <Wishlist />
          </Route>
          <Route exact path='/productDetail/:productID'>
            <ProductDetail />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/categoryProduct/:category'>
            <CategoryProduct />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
