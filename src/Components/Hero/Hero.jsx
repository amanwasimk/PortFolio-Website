import React from "react";
import './Hero.css'
import propic from "../../assets/photo.png"
import resume from "../../../public/CV_SOFTWARE_ATS_2U_React.pdf"
import ConPic from "../../assets/Conpic.jpg"

export default function Hero(){
    return(<div id="heroid" className="hero">
        <div className="propic">
            <img src={ConPic} alt="photo"/>
            <h1><span>I'm Aman Wasim</span> , Software developer based in Kerala </h1>
            <p>I'm a Fresher from NIT Calicut   </p>
            <div className="connect-box">
            {/* <div className="connect">Connect with me</div> */}
            <a 
  href={resume} 
  target="_blank" 
  rel="noopener noreferrer"
  
><div className="resume">My Resume</div></a>
            </div>
        </div>
        </div>
    )
}