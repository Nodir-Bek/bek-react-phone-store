import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConnsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends Component {
  render() {
    return (
      <ProductConnsumer>
        {(value) => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList value={value} />
                <CartTotals value={value} />
              </>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConnsumer>
    );
  }
}
