import React from 'react'
import "../styles/orderComponent.css"
import moment from 'moment'
import CurrencyFormat from 'react-currency-format'
import CheckoutProducts from './CheckoutProducts'
const orderComponent = ({order}) => {
    return (
        <div className="order">
            <h2>Order</h2>
    <p>{moment.unix(order.data.created).format("MMMM Do YYYYY,h:mma")}</p>
    <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProducts
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default orderComponent
