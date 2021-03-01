import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const price = cart.reduce((price, product) => parseFloat(product.price), 0);
    const total = cart.reduce((total, product) => total + Number(product.price), 0);
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;        
    // }

    let shipping = 0
    if(total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }
    const tax = total / 10;
    const grandTotal = (total + shipping + tax);

    const fromatNumber = num =>{
        const floa = parseFloat(num);
        const precision = floa.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Total before tax: {fromatNumber(total)}</p>
            <p><small>Shipping cost: {fromatNumber(shipping)}</small></p>
            <p><small>Tax + Vat: {fromatNumber(tax)}</small></p>
            <p>Total price: {fromatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;