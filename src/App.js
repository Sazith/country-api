import './App.css';
import Country from './components/Country';
import { useEffect, useState } from 'react';

function App() {
  const [country,setCountry] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountry(data))
  },[])
  const [cart,setCart] = useState([]);
  const handleAddCountry = (country) =>{
    const newCart = [...cart,cart];
    setCart(newCart)

  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2 style={{color:'red'}}>Country Api</h2>
        </div>
        <div>
          <h3>Total Countries showing : {country.length}</h3>
          <h2>Add Country :{cart.length} </h2>
          {
            country.map((country,i) => <Country country={country} handleAddCountry={handleAddCountry} key={i}></Country> )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
