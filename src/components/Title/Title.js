import React from 'react'
import './title.scss'

const Title = ({ subTitle }) => {
    return (
        <div className="title">
            <h1>Welcome to our “Warung”</h1>
            <p>{subTitle}</p>
        </div>
    )
}

export default Title;