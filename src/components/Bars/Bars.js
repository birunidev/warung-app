import React from 'react'
import './bars.scss'

const Bars = ({ barClicked }) => {
    return (
        <div className="bars" onClick={barClicked}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}
export default Bars;
