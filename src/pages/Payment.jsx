import React from 'react';
import CheckoutFrom from '../components/CheckoutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../hooks/useCart';



//todo
const  stripePromise = loadStripe('pk_test_51NI9ldAIkNuJhZZgixhETJ7q4QTWar8Tr9OYefU1nrcgpYxgWHurDawqu2kpONM3wxcZ6ZmH05pJzlQa60s2pLX100Hgt5qULW');
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> sum+ item.price, 0);
    const price = parseFloat(total.toFixed(2))
    console.log(total);



  
    return (
        <div>
         <h2>payment</h2>
         <Elements stripe={stripePromise}>
         <CheckoutFrom price={price} ></CheckoutFrom>
         </Elements>   
         
        </div>
    );
};

export default Payment;