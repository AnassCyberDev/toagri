import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const ProductIem = ({product}) => {

    const [images,setImages]=useState([])

    const fetchImages=async()=>{
        console.log(product)
        const request=await fetch(`http://127.0.0.1:8080/app/api/product-images/${product.id}`,{ 
         headers:{
            "Authorization":"Token 879649642af492dbf7e262a3f9d26f2ba4f96d00"
        }

        })

        const resp=await request.json()
         return resp.data
    }
    useEffect(()=>{
        const getImages=async()=>{
            const images_=await fetchImages()
            console.log(images_)
            setImages(images_)
        }

        getImages()
    },[])

  return (
    <div><div class="card mt-3" style={{width: "18rem"}}>
    <img class="card-img-top" src={images.length>0?`http://127.0.0.1:8080${images[0]}`:"http://127.0.0.1:8080/media/images/default_item_image.jpg"} alt="Card image cap" height={"200vw"}/>
    <div class="card-body">
      <h5 class="card-title">{product.name}</h5>
      <p class="card-text">{product.description}</p>
      <Link to={'/This Product'} class="btn btn-success">check product</Link>
    </div>
  </div></div>
  )
}
