import React from 'react'
import './Coin.css'

const Coin = (props) => {
    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={props.image} alt="crypto" />
                    <h1>{props.name}</h1>
                    <p className="coin-symbol"></p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${props.price.toLocaleString()}</p>
                    <p className="coin-high">${props.highToday.toLocaleString()}</p>

                    {props.pricechange<0 ? (
                        <p className="coin-percent red">{props.pricechange.toFixed(2)}%</p>
                    ):(
                        <p className="coin-percent green">{props.pricechange.toFixed(2)}%</p>
                    )
                }
               
                <p className="coin-ath">
                     ${props.ath.toLocaleString()}
                </p>
                {/* <p className="coin-marketcap">
                  Vol.  ${props.volume.toLocaleString()}
                </p> */}
                </div>
            </div>

            
        </div>
    )
}

export default Coin
