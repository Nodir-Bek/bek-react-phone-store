import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import Details from "./Components/Details";
import Default from "./Components/Default";
import Modal from "./Components/Modal";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}
