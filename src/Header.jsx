import {useState} from "react";
import './nav.css'

function Header({handleNavChange}){
    function handleNavClick(input){
        handleNavChange(input)
    }
    return(
        <>
            <nav className={"nav"}>
            <h1 onClick={() => handleNavClick('home')}>FFWFF</h1>
                <ul className={"list"}>
                    <li onClick={() =>handleNavClick('about')}>about</li>
                    <li onClick={() => handleNavClick('members')}>members</li>
                </ul>
            </nav>

        </>
    )
}
export default Header