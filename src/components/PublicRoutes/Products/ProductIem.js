import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductIem = ({product,ip_address}) => {

    const [images,setImages]=useState([])

    const fetchImages=async()=>{
     
        const request=await fetch(`${ip_address}/app/api/product-images/${product.id}`)

        const resp=await request.json()
         return resp.data
    }
    useEffect(()=>{
        const getImages=async()=>{
            const images_=await fetchImages()
 
            setImages(images_)
        }

        getImages()
    },[product.name])

  return (
    <div id='oneItem'><div class="card mt-3" style={{width: "12rem",borderRadius:15}}>
    <div style={{ position: "relative", width: "100%",borderRadius:"inherit" }}>
  <img
    className="card-img-top"
    src={
      images.length > 0
        ? `${ip_address}${images[0]}`
        : `${ip_address}/media/images/default_item_image.jpg`
    }
    alt="Card image cap"
    height="180vw"
    style={{
      borderTopLeftRadius: "inherit",
      borderTopRightRadius: "inherit",
      width:"100%"
    }}
  />
  <p
    className="category"
    style={{
      position: "absolute",
      top: 10,
      left: 10,
      backgroundColor: "coral",
      borderRadius:5,
      padding: 10,
      margin: 0, // optional, remove extra spacing
      color: "white", // for better contrast
      fontSize:10
    }}
  >
    {product.category.name}
  </p>
</div>

    <div class="card-body text-center p-1" style={{height:100}}>
    
      <h5 class="productCardTitle">{product.name}</h5>
      <div className='productPrice'><span className='price'></span> {product.price}  MAD</div>
      {/* <p class="card-text">{product.description}</p> */}
      <Link to={`/This Product/${product.id}`} class="btn btn-success checkProductButton">check product</Link>
    </div>
  </div></div>
  )
}
