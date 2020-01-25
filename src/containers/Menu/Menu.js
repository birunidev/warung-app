import React from 'react'
import './menu.scss'
import Container from '../Container/Container'
import Title from '../../components/Title/Title'
import Cards from '../Cards/Cards'

const Menu = () => {
    return (
        <div className="menu">
            <Container>
                <Title subTitle="Please make an order" />
                <Cards />
            </Container>


        </div>
    )
}

export default Menu;