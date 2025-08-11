import {AUTH_ERROR,USER_AUTHENTICATED,USER_LOADED } from "./types";


const ip_address =`http://${process.env.REACT_APP_API_IP_ADDRESS}:8080`
// const ip_address=''

// ////////////////////////////////////////////////////////////////////////////////////////
// check TOKEN NAD load USER

export const loadUser=(auth)=>{

   

    return function(dispatch)
       
    {




    

    const config={
        headers:{
            'content-Type':'application/json'
        }
    }

    if (auth || auth==!"undefined"){
        config.headers['Authorization']=`Token ${auth}`
       



   fetch(`${ip_address}/check-auth`,config)
     .then(res=>res.json())

     .then(user=>
        {if(user.hasOwnProperty('authenticated')){
     
            dispatch({
                type:USER_AUTHENTICATED,
                payload:user

            })
        }else{

            dispatch({
                type:AUTH_ERROR
            })
            
       
        } }
        )}else{
    dispatch({
            type:AUTH_ERROR
        })
   
     }
     }
}
// //////////////////////////////////////////////////////////////////////////////////////////////////////
// Logout USER


export const logoutUser=(auth)=>{

          

    return function(dispatch)
       
    {



        const config={
            method:'GET',
            headers:{
                'content-Type':'application/json'
            }
        }
    
        if (auth || auth==!"undefined"){
    
            config.headers['Authorization']=`Token ${auth}`
    
       fetch(`${ip_address}/logout`,
       config)
         
    
         .then(()=>{
            
                dispatch({
                    type:AUTH_ERROR
                })
            
            })
            } }
            
}



