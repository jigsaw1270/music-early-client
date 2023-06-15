import React from 'react';
import usePayment from '../hooks/usePayment';

const Paymenthistory = () => {
    const [payment , refetch] = usePayment();
    console.log(payment);
    return (
        <div>
           
        </div>
    );
};

export default Paymenthistory;