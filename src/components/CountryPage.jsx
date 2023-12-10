import React, { useEffect, useState } from "react";
import Country from "./Country";
import Cart from "./Cart";

const CountryPage = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      //fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setCountry(data))
      // convert Object into array
      //.then((data) => console.log=(Object.entries(data)))
      .catch((err) => console.log("erroe"));
  }, []);

  const [cart, setCart] = useState([]);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    console.log(newCart);
    setCart(newCart);
    //console.log(cart);
  };
  // console.log(cart);
  return (
    <>
      <div>
        <h3>Total Countries showing : {country.length}</h3>
        <h2>Add Country :{cart.length} </h2>
        <Cart cart={cart} />
        {country.map((country, i) => (
          <Country
            country={country}
            handleAddCountry={handleAddCountry}
            key={i}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default CountryPage;
