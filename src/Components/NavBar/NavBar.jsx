import React from "react"
import {useRef} from "react"
import './NavBar.css'
import logo from "../../assets/logo.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/Menu_open .png"
import menu_close from "../../assets/Menu_close.png"

export default function NavBar(){
    const menuRef=useRef();
    const openMenu = () => {
        menuRef.current.style.right = "-50%";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-400%";
    }
    const[menu,setMenu]=React.useState()
    return(
        <div id="nav-bar" className='NavBar'>
            <img width="80px" src={logo} alt="Logo" className="logo"/>
            <img onClick={openMenu} width="70px"src={menu_open} alt="" className="nav-mob-open"/>
            <ul ref={menuRef} className="nav-menu">
                <img width="50px" onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close"/>
                <li><AnchorLink className="anchor-link" href='#heroid'><p onClick={() => handleLinkClick("home")}>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href='#aboutid'><p onClick={() => handleLinkClick("about")}>About</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#work"><p onClick={() => handleLinkClick("work")}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" href="#connectid"><p onClick={() => handleLinkClick("contact")}>Contact</p></AnchorLink></li>
                </ul>
                <div className="nav-connect"><AnchorLink className="anchor-link"  href="#connectid"><p onClick={()=>setMenu("connectid")} >Connect with me</p></AnchorLink></div>
                
                </div>
    )
}