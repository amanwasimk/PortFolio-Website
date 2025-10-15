import React from "react"
import './Work.css'
import Rock from "../../assets/Rock.png"
import Tenzie from "../../assets/Tenzie.png"
import TicTac from "../../assets/Tic-Tac.png"
import CurrencyConverter from "../../assets/Currency_Converter.png"


export default function Work(){
    return (
        <section id="work" className="my-work">
            <h1>My Works</h1>
            
            <div className="works-grid">
                <div className="work-item">
                    <a href="https://amanwasimk.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
                    <img  src={TicTac} alt="Tic Tac Toe game board"/>
                    <p>Tic-Tac-Toe game</p></a>
                </div>

                <div className="work-item">
                    <a href="https://amanwasimk.github.io/CurrencyConverter/" target="_blank" rel="noopener noreferrer">
                    <img src={CurrencyConverter} alt="Currency converter interface"/>
                    <p>Currency Converter - Gets the real-time value conversion between any country</p></a>
                </div>

                <div className="work-item">
                    <a href="https://amanwasimk.github.io/Stone-Paper-Scissor/" target="_blank" rel="noopener noreferrer">
                    <img src={Rock} alt="Rock Paper Scissors game interface"/>
                    <p>Rock-Paper-Scissor game</p></a>
                </div>

                <div className="work-item">
                    <a href="https://amanwasimk.github.io/Tenzies-game/" target="_blank" rel="noopener noreferrer">
                    <img src={Tenzie} alt="Tenzie dice game interface"/>
                    <p>Tenzie game - Rolling dices and holding the one with desired number</p></a>
                </div>
            </div>
        </section>
    )
}