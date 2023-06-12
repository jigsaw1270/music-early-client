import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const CheckoutFrom = ({cart ,price}) => {
    const stripe = useStripe();
const elements = useElements();
const [axiosSecure] = useAxiosSecure();
const [clientSecret, setClientSecret] = useState('');
const [cardError , setCardError] = useState(' ');
const [processing, setProcessing] = useState(false);
const [transactionId, setTransactionId] = useState('');
const {user} = useAuth();



useEffect(() => {
 
    if (price > 0) {
        axiosSecure.post('/create-payment-intent', { price })
     
            .then(res => {
              
                setClientSecret(res.data.clientSecret);
            })
    }
}, [price, axiosSecure])

    const  handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card == null){
            return;
            
        }
        console.log('card',card);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error',error)
            setCardError(error.message);
        }
        else{
            setCardError(' ')
            console.log('payment method', paymentMethod)
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('paymentintent',paymentIntent)

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
             
                status: 'enrolled'
               
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'payment history added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
        }


    
    }
    

    
    return (
        <div className="w-screen">
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="mt-4 btn btn-primary btn-sm" type="submit" disabled={!stripe || !clientSecret || processing} >
                    Pay
                </button>
            </form>
            {cardError && <p className="ml-8 text-red-600">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
 
        </div>
    );
};
    

export default CheckoutFrom;