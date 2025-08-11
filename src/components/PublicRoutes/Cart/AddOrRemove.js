import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem, updateItem } from '../../../actions/cartActions'
import { MdDeleteForever } from "react-icons/md";
import addToCartAnounymous from '../../../utils/utils'



export const AddOrRemove = ({quantity,id,product_id,user,toggleAddOrReduce}) => {
   

    const [number,setNumber]=useState(quantity)
    const dispatch = useDispatch()
    const add=()=>{setNumber(number+1);updateQuantity(number+1);toggleAddOrReduce()}
    const aremove=()=>{if(number>0){setNumber(number-1);updateQuantity(number-1);toggleAddOrReduce()}}

   const updateQuantity=(newNumber)=>{

    if(user.isAuthenticated){
      if(newNumber){

        const formdata=new FormData()
        formdata.append('quantity',newNumber)
        dispatch(updateItem(formdata,localStorage.getItem('token'),id))
      }else{
         dispatch(deleteItem(localStorage.getItem('token'),id))

      }
    
      
      }
   else{
    addToCartAnounymous(product_id,newNumber)
   }
    }
    
  return (
    <div className='d-flex flex-row add  m-auto' >
        <div className="minus text-center" onClick={aremove}>{
          number>1 ? '-':<MdDeleteForever />
          
          }</div>
        <div className="qunatite text-center">{number}</div>
        <div className="plus text-center" onClick={add}>+</div>

    </div>
  )
}
