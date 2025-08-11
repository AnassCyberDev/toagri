import {ADD_PRODUCT} from './types'



const ip_address =`http://${process.env.REACT_APP_API_IP_ADDRESS}:8080`

export const addProduct=(data,token,navigate)=>{
    return async function(dispatch)
       
    {

    const response = await fetch(`${ip_address}/pay/products/`, {
        method:'POST',
        headers:{
            Authorization: `Token ${token}`
        },
        body:data
    });

    const status = response.status
    switch(status){
        case 201:
            const data=await response.json()
            
            dispatch({
                type:ADD_PRODUCT,
                payload:data
            })
            navigate('/products')
            
        default:
            
            return null
    }

}
}
