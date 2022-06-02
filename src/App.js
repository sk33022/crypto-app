import axios from 'axios';
import './App.css';
import React, {useState, useEffect} from 'react';

import Footer from './components/Footer';
import Coin from './page/Coin';


function App() {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState('');

  useEffect( () => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then( res => {
      setCoin(res.data);
      console.log(res.data);
    })
    .catch( error => {
      console.log(error);
    });
  }, [])

const handleChange = (e) => {
  setSearch(e.target.value);
} 
const filteredCoins = coins.filter(
  coin=>coin.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="App">
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CRYPTO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>

      </form>
     
    </div>
  </div>
</nav>
<div>
{filteredCoins.map(coin=>{
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image} 
          symbol={coin.symbol}
          marketcap={coin.market_cap}
          price={coin.current_price}
          pricechange={coin.price_change_percentage_24h}
           volume={coin.total_volume}
           ath = {coin.ath}
           highToday = { coin.high_24h}
          />
        );
      })}
</div>
      <Footer />

      
    </div>
  );
}

export default App;
