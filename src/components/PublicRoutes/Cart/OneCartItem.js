import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AddOrRemove } from './AddOrRemove'
import { useSelector } from 'react-redux'

export const OneCartItem = ({item,ip_address,user,toggleAddOrReduce}) => {
    const [images,setImages]=useState([])

    

    const fetchImages=async()=>{
      
        const request=await fetch(`${ip_address}/app/api/product-images/${item.product.id}`,{ 
         headers:{
            "Authorization":`Token ${localStorage.getItem('token')}`
        }

        })

        const resp=await request.json()
         return resp.data
    }
    useEffect(()=>{
        const getImages=async()=>{
            const images_=await fetchImages()
            setImages(images_)
        }

        getImages()
    },[item.quantity])

  return (
    <tr key={item.id}>
              <td className="text-center align-middle">
              
       
                <img className='imageCartItem'  src={images.length>0?`${ip_address}${images[0]}`:`${ip_address}/media/images/default_item_image.jpg`} alt="Card image cap" width={"150vw"} height={"120vw"}/>
               
           
              </td>
              <td className="text-center align-middle">
                <Link to={`/This Product/${item.product.id}`} className="row" style={{textDecoration: "none", color: "black"}}>
              <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="title">{item.product.name}</div>
                        {/* <div className="decription">{item.product.description}</div> */}
                        <div className="category">{item.product.category.name}</div>
                    </div>
                </Link>
              </td>
              <td className="text-center align-middle">
              {item.product.price}
              </td>

       
              <td className="text-center align-middle"> 
              <AddOrRemove quantity={item.quantity} id={item.id} product_id={item.product.id} user={user} toggleAddOrReduce={()=>toggleAddOrReduce()}/>
              </td>

              <td className="text-center align-middle">{parseFloat(item.product.price)*parseFloat(item.quantity)}</td>
       
     
     </tr>
  )
}
