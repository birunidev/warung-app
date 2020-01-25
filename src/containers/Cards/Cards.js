import React from 'react'
import FoodCard from '../../components/Card/FoodCard'
import './cards.scss'


const Cards = () => {

    return (
        <div className="cards">
            <FoodCard type="menu" />
            <FoodCard type="menu" />
            <FoodCard type="menu" />
            <FoodCard type="menu" />
            <FoodCard type="menu" />
            <FoodCard type="menu" />
        </div>
    )
}

export default Cards;
