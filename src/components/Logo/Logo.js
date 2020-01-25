import React from 'react'
import './logo.scss'
import Logos from '../../asset/logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={Logos} width="150" alt="logo-pic" />
        </div>
    )
}
export default Logo;