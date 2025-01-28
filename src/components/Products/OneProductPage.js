import React from 'react'

export const OneProductPage = () => {
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
    <section id='oneProduct' className='container p-5'>
        <div className="row">
            <div className="col-lg-6">
                <img src="http://127.0.0.1:8080/media/images/default_item_image.jpg" alt="" width={"80%"}/>
            </div>
            <div className="col-lg-6">
                <div className="flexColCenter">
                <h2>Product Name</h2>
                <p>product description</p>
                <h5>Price 500 MAD</h5>
                <div><button className='btn btn-outline-warning' onClick={handlePayment}>Proceed to Payment</button></div>
                </div>
                
            </div>
        </div>
    </section>
  )
}
