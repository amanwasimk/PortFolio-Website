import React from "react"
import './NavBar.css'
import logo from "../../assets/logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function NavBar(){
    const[menu,setMenu]=React.useState()
    return(
        <div id="nav-bar" className='NavBar'>
            <img width="80px" src={logo} alt="Logo"/>
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link"  href='#heroid'><p onClick={()=>setMenu("about")} >Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href='#aboutid'><p onClick={()=>setMenu("about")} >About</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#work"><p onClick={()=>setMenu("work")} >Portfolio</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link"  href="#connectid"><p onClick={()=>setMenu("connectid")} >Contact</p></AnchorLink></li>
                </ul>
                <div className="nav-connect"><AnchorLink className="anchor-link"  href="#connectid"><p onClick={()=>setMenu("connectid")} >Connect with me</p></AnchorLink></div>
                
                </div>
    )
}