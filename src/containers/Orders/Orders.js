import React from 'react'
import Title from '../../components/Title/Title'
import './orders.scss'

const Orders = () => {
    return (
        <div className="orders">
            <Title subTitle="My Orders" />
            <p className="none">There is no order. Please add some</p>
        </div>

    )
}
export default Orders;
