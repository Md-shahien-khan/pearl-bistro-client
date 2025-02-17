import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const {user} = useAuth();
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() =>{
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price : totalPrice})
            .then(res =>{
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        }
    }, [axiosSecure, totalPrice])


    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type : 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message);
        }
        else{
            console.log('payment method', paymentMethod);
            setError('');
        }

        // confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(
            clientSecret, {
                payment_method : {
                    card : card,
                    billing_details : {
                        email : user?.email || 'anonymous',
                        name : user?.displayName || 'anonymous'
                    }
                }
            })
            if(confirmError){
                console.log('confirm error');
            }
            else{
                console.log('payment intent', paymentIntent);
                if(paymentIntent.status === 'succeeded'){
                    console.log('Transaction Id', paymentIntent.id);
                    setTransactionId(paymentIntent.id);

                    // Now save the payment in the database
                    const payment = {
                        email : user.email,
                        price : totalPrice,
                        transactionId : paymentIntent.id,
                        date : new Date(),
                        cartIds : cart.map(item => item._id),
                        menuItemIds : cart.map(item => item.menuId),
                        status : 'pending'
                    }

                    const res = await axiosSecure.post('/payments', payment);
                    console.log('payment saved', res.data);
                    refetch();
                    if(res.data?.paymentResult?.insertedId){
                        Swal.fire({
                            title: "Thank you for the payment!!!",
                            icon: "success",
                            draggable: true
                        });
                        navigate('/dashboard/paymentHistory')
                    }
                }
            }
    }
    return (
        <form onSubmit={handleSubmit}>
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
        <button className='btn bg-yellow-600 text-white' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className='text-red-500'>{error}</p>
        {transactionId && <p className='text-green-600'>Your transaction Id : {transactionId} </p>}
      </form>
    );
};

export default CheckOutForm;