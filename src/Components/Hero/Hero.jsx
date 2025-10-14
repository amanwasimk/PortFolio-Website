import React from "react";
import './Hero.css'
import propic from "../../assets/photo.png"

export default function Hero(){
    return(<div id="heroid" className="hero">
        <div className="propic">
            <img src={propic} alt="photo"/>
            <h1><span>I'm Aman Wasim</span> , Frontend developer based in Kerala </h1>
            <p>I'm Fresher from NIT Calicut , a tech enthussiaste ,eagerly looking for an opportunity</p>
            <div className="connect-box">
            {/* <div className="connect">Connect with me</div> */}
            <div className="resume">My Resume</div>
            </div>
        </div>
        </div>
    )
}