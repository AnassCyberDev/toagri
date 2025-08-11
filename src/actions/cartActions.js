import {ADD_ITEM,REMOVE_ITEM,MODIFY_ITEM,GET_ITEMS } from "./types";



const ip_address =`http://${process.env.REACT_APP_API_IP_ADDRESS}:8080`
// const ip_address=''


export const getItems=(token)=>{
    return async function(dispatch)
       
    {

    const response = await fetch(`${ip_address}/pay/cart`, {
       
        headers:{
            Authorization: `Token ${token}`
        },
    
    });

    const status = response.status
    switch(status){
        case 200:
            const data=await response.json()
            console.log('ici helping',data.items)
            dispatch({
                type:GET_ITEMS,
                payload:data.items
            })
        default:
            
            return null
    }

}
}

export const addItem=(data,token)=>{
    return async function(dispatch)
       
    {

    const response = await fetch(`${ip_address}/pay/cart/`, {
        method:'POST',
        headers:{
            Authorization: `Token ${token}`
        },
        body:data
    });

    const status = response.status
    switch(status){
        case 200:
            const data=await response.json()

            dispatch({
                type:ADD_ITEM,
                payload:data.items
            })
        default:
            
            return null
    }

}
}

export const updateItem=(data,token,id)=>{
    return async function(dispatch)
       
    {

    const response = await fetch(`${ip_address}/app/api/cartItem/${id}/`, {
        method:'PATCH',
        headers:{
            Authorization: `Token ${token}`
        },
        body:data
    });

    const status = response.status
    switch(status){
        case 200:
            const data=await response.json()
            console.log('ici helping',data)
            dispatch({
                type:MODIFY_ITEM,
                payload:data
            })
        default:
            
            return null
    }

}
}

export const deleteItem=(token,id)=>{
    return async function(dispatch)
       
    {

    const response = await fetch(`${ip_address}/app/api/cartItem/${id}/`, {
        method:'DELETE',
        headers:{
            Authorization: `Token ${token}`
        },
    });

    const status = response.status
    switch(status){
        case 204:
            // const data=await response.json()
            // console.log('ici helping',data)
            dispatch({
                type:REMOVE_ITEM,
                payload:id
            })
        default:
            
            return null
    }

}
}