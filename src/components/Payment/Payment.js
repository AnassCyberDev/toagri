import React from 'react'


export const Payment = () => {

    const initiatePayment = async () => {
        const response = await fetch("http://127.0.0.1:8080/pay/payment/", {
            method:'POST',
            headers:{
                Authorization: `Token 879649642af492dbf7e262a3f9d26f2ba4f96d00`
            }
        });

        const data=await response.json()
        console.log(data)
        return data;
    };

    const handlePayment = async () => {
        const paymentData = await initiatePayment();
        setTimeout(window.location.href = paymentData.redirect_url, 5000)
       // Redirect to PayTabs payment page
    };

  return (
    <div><button onClick={handlePayment}>Proceed to Payment</button></div>
  )
}
