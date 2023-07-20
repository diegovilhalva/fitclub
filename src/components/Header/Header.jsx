import React, { useState } from "react";
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from "../../assets/bars.png"
import { Link } from "react-scroll";
const Header = () => {
    const mobile = window.innerWidth  <= 768 ? true : false;
    const [menuOpened,setMenuOpened] = useState(false)   
    return(
       
        <div className="header">
             <img src={Logo} alt="" className="logo" />
             {(menuOpened === false && mobile === true ) ? (<div style={{backgroundColor:'var(--appColor)',padding:'0.5rem',borderRadius:'5px'}}
             onClick={() => {
                setMenuOpened(true)
             }}>
                <img src={bars} alt=""  style={{width:'1.5rem',height:'1.5rem'}}/>
             </div>) : (
                <ul className="header-list">
                <li onClick={() => {
                    setMenuOpened(false)
                }}><Link>Home</Link></li>
                <li onClick={() => {
                    setMenuOpened(false)
                }}>
                    
                    Programas</li>
                <li onClick={() => {
                    setMenuOpened(false)
                }}>Sobre</li>
                <li onClick={() => {
                    setMenuOpened(false)
                }}>Planos</li>
                <li onClick={() => {
                    setMenuOpened(false)
                }}>
                    <Link to='testimonials' span={true} smooth={true}> Depoimentos</Link>
                   </li>
             </ul>
             ) }
             
        </div>

    )
}

export default Header