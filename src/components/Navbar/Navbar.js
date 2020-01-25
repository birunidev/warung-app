import React from 'react'
import Logo from '../Logo/Logo';
import Bars from '../Bars/Bars';
import './navbar.scss'

const Navbar = ({ barHandler }) => {


    return (
        <div className="navbar">
            <div className="nav-flex">
                <Bars barClicked={barHandler} />
                <Logo />
            </div>
        </div>
    )
}

export default Navbar;