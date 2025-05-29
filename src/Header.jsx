import {useState} from "react";
import './nav.css'

function Header({handleNavChange, tab}){
    function handleNavClick(input){
        handleNavChange(input)
    }
    return(
        <>
            <nav className={"nav"}>
            <h1 className={tab === 'home' ? "selected" :""} onClick={() => handleNavClick('home')}>FFWFF</h1>
                <ul className={"list"}>
                    <li className={tab==='home' ? 'selected' : ''} onClick={() => handleNavClick('home')}>home</li>
                    <li className={tab==='about' ? "selected" : ""} onClick={() =>handleNavClick('about')}>about</li>
                    <li className={tab==='members' ? 'selected' : ""} onClick={() => handleNavClick('members')}>members</li>
                </ul>
            </nav>

        </>
    )
}
export default Header