import React from 'react'
import { Card } from 'react-bootstrap'
import foodImg from '../../asset/food.jpg'
import './foodcard.scss'

const FoodCard = ({ type }) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let btn;
    let select;
    if (type === 'menu') {
        btn = <button>+</button>
        select = <select>
            {
                array.map((arr, key) => {
                    return <option value={arr} key={key}>{arr}</option>
                })
            }
        </select>
    } else {
        btn = null;
        select = 3;
    }


    return (
        <div className="foodcard">
            <Card style={{ width: '14rem', color: 'black', border: 'none', margin: '0 auto' }}>
                <Card.Img variant="top" src={foodImg} />
                <Card.Body>
                    <Card.Text style={{ fontSize: '16px', fontWeight: '600' }}>
                        Sate Ayam + Lontong
                    </Card.Text>
                    <Card.Title style={{ fontWeight: '700', margin: '10px 0', color: '#E25822' }}>Rp 15.000,00</Card.Title>
                    <div className="detail">
                        <div className="food-detail">
                            <p>- 10 pieces of Sate</p>
                            <p>- 5 pieces of Lontong</p>
                        </div>
                        <div className="buttons">
                            {select}
                            {btn}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FoodCard;