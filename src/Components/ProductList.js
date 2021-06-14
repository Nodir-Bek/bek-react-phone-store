import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConnsumer } from "../context";
export default class ProductList extends Component {
 
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConnsumer>
                {(val) => {
                  return val.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConnsumer>
            </div>
          </div>
        </div>

        {/* */}
      </>
    );
  }
}
