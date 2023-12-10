import React, { useState } from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
  let totalPopulation = 0;
  for (let index = 0; index < cart.length; index++) {
    const country = cart[index];
    totalPopulation = totalPopulation + country.population;
  }
  return (
    <>
      <div>
        <h3>This is Cart :{cart.length} </h3>
        <h3>Total Population :{totalPopulation} </h3>
      </div>
    </>
  );
};

export default Cart;
