import React, { useEffect, useState } from 'react'
import { ProductIem } from './ProductIem'

export const ProductPage = () => {
    const [products,setProducts]=useState([])
    const fetchProducts=async()=>{
        const request=await fetch('http://127.0.0.1:8080/app/api/product',{
            headers:{
                "Authorization":"Token 879649642af492dbf7e262a3f9d26f2ba4f96d00"
            }
        })

        const resp=await request.json()
        return resp
    }

    useEffect(()=>{
        const getProducts=async()=>{
            const products=await fetchProducts()
            console.log(products)
            setProducts(products)

        }

        getProducts()
    },[])
  return (
    <div className='container'>
        <div className="row  m-3">
            
        
        {products.map(product=><div className="col-lg-4"><ProductIem product={product}/></div>)}
    </div>
    </div>
  )
}
