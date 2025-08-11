import React, {useState, useEffect } from 'react'
import { OneCartItem } from './OneCartItem'
import { useDispatch, useSelector} from 'react-redux'
import { USER_LOADED } from '../../../actions/types'

import './Cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = ({ip_address}) => {


        const [products,setProducts]=useState([])
        const [addOrReduse,setAddOrReduce]=useState(1)
        const [nom, setNom] = useState('');
        const [mon_code, setMon_code] = useState('');
        const [prenom, setPrenom] = useState('');
        const [phone,setPhone]=useState('')
        const [city,setCity]=useState('')
        const [coupon,setCoupon]=useState('')
        const [reduction,setReduction]=useState(0)
        const navigate=useNavigate()
        const dispatch=useDispatch()
        const user=useSelector(state=>state.user)
        const items=useSelector(state=>state.cart.cartItems)
        const [items_,setItems_]=useState([])

        // function to trigger state change

        const toggleAddOrReduce=()=>{
          if(addOrReduse===1){
            setAddOrReduce(2)
          }else{
            setAddOrReduce(1)
          }
        }

        const fetchProducts=async()=>{
            const request=await fetch(`${ip_address}/app/api/product`,{
          
            })
    
            const resp=await request.json()
            return resp
        }
    
        useEffect(()=>{
            const getProducts=async()=>{
                const products_=await fetchProducts()
                console.log(products_)
                getCartWithDetails(products_)
                setProducts(products)
    
            }
    
            getProducts()

         
     
           
        },[addOrReduse,coupon])


    // get cart with detail if user is not authenticated


    const getCartWithDetails = (products) => {
        // Step 1: Check if "cart" exists in localStorage
        const cartData = localStorage.getItem("cart");
        
        if (!cartData) {
          console.log("Cart is empty or does not exist.");
          return [];
        }
      
        // Step 2: Parse the cart JSON
        let cartItems = JSON.parse(cartData); 
      
        // Step 3: Map over cart items and merge with product details
        let detailedCart = cartItems.map(cartItem => {
          // Find the corresponding product from the available products array
          let product = products.find(p => p.id === parseInt(cartItem.product_id));
      
          // If the product exists, return its details along with the quantity
          return product ? { product, quantity: cartItem.quantity } : null;
        }).filter(item => item !== null); // Remove null values in case some products don't exist
      
        // return detailedCart;
        setItems_(detailedCart)
      };
      
      // Example Usage
  
      

      





    

    // payment

    const initiatePayment = async () => {
        const response = await fetch(`${ip_address}/pay/payment/`, {
            method:'POST',
            headers:{
                Authorization: `Token ${localStorage.getItem('token')}`
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

    // 




    // if user is not authenticated

    function generateSecretCode() {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let secretCode = "";
      
      // Use a pseudo-random approach to generate the code
      for (let i = 0; i < 6; i++) {
          secretCode += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return secretCode;
    }

    const register=async(data)=>{
            const request=await fetch(`${ip_address}/registerOrder/`,{
              method:'POST',
              body: data,
             
          
           })
          const res=await request.json()
           switch(request.status){
              case 201:
                localStorage.setItem("token",res.token)
                dispatch({
                  type:USER_LOADED,
                  payload:res
                })
               
                console.log(res)
           break
           default:
              alert('wrong credentials')
              break
           }
          

          }


const onSubmit=async()=>{
  // e.preventDefault()
  const men_code=generateSecretCode()
  setMon_code(men_code)
  const formdata= new FormData()
  formdata.append('first_name',nom)
  formdata.append('last_name',prenom)
  formdata.append('phone',phone)
  formdata.append('city',city)
  formdata.append('username',`${nom}_${prenom}_${phone}`)
  formdata.append('cart',localStorage.getItem('cart'))
  formdata.append('login_code',men_code)
  register(formdata)
  alert(`Garder ce code pour l'utiliser pour s'authentifier :${men_code}`)

}


const useCoupon=async(e)=>{
  e.preventDefault()
    const query=await fetch(`${ip_address}/app/api/coupon/${coupon}`,{
      headers:{
        Authorization:`Token ${localStorage.getItem('token')}`
      }
    })
    const status=query.status
    console.log(status)
    switch(status){
      case 200:
        const reduce=await query.json()
        setReduction(reduce.reduction)
        break
      default:
        alert('no available ')
    }
}

    // calculate sum

    function calculateTotal(items) {
        return items.reduce((total, item) => {
            return total + parseFloat(item.product.price) * item.quantity;
        }, 0);
    }


    function calculateTotalWithCoupon(items, reduction) {
      console.log(((100 - parseInt(reduction)) / 100) )
      return calculateTotal(items) * ((100 - parseInt(reduction)) / 100);
  }

    return (
    <div className='container py-5'>
      <table className="table ">
        <thead className="table-light">
          <tr>
            <th></th>
            <th className='text-center'>product</th>
            <th className='text-center'>Price</th>
            <th className='text-center'>quantity</th>
            <th className='text-center'>total</th>
          </tr>
        </thead>
        <tbody>
            {user.isAuthenticated&&items ? items.map((item)=><OneCartItem ip_address={ip_address} item={item} user={user} toggleAddOrReduce={toggleAddOrReduce}/>):
            items_.map((item)=><OneCartItem ip_address={ip_address} item={item} user={user} toggleAddOrReduce={toggleAddOrReduce}/>)}
            </tbody>
            </table>

        <div className='cartTotals' >

            <div className="cartTotals d-flex justify-content-start">
                <div className="naming">Subtotal</div>
                <div className="value">{user.isAuthenticated&&items ?calculateTotal(items):calculateTotal(items_)}</div>
                <div >MAD</div>
            </div>
            <div className="cartTotals d-flex justify-content-start">
            <div className="naming">Applied Coupons</div>
            <form onSubmit={useCoupon} className="row g-3">

  <div className="col-auto">

    <input type="text" className="form-control" id="coupon" placeholder="Coupon code" onChange={(e)=>setCoupon(e.target.value)} value={coupon}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Use Coupon</button>
  </div>
</form>
            </div>
            <div className="cartTotals d-flex justify-content-start">
            <div className="naming">Total</div>
            <div className="value">{user.isAuthenticated&&items ?calculateTotalWithCoupon(items,reduction):calculateTotalWithCoupon(items_,reduction)}</div>
            <div >MAD</div>
            </div>
           {user.isAuthenticated? <button className='btn btn-success d-flex flex-end' onClick={handlePayment}>Proceed to payment</button>:
          <div className="">
           <button type="button" class="btn btn-success d-flex flex-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
             passer commande
           </button>
           
         
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <div class="modal-dialog">
               <div class="modal-content">
                 <div class="modal-header">
                   <h5 class="modal-title" id="exampleModalLabel">Informations personnel</h5>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div class="modal-body">
                 <form onSubmit={onSubmit}>
  <div class="mb-2">

    <input type="text" class="form-control" id="exampleInputNom1" aria-describedby="NomHelp" placeholder='Saisissez votre Nom' onChange={(e)=>setNom(e.target.value)} value={nom}/>
  
  </div>
  <div class="mb-2">
   
    <input type="text" class="form-control" id="exampleInputPrénom1" aria-describedby="PrénomHelp" placeholder='Saisissez votre Prénom' onChange={(e)=>setPrenom(e.target.value)} value={prenom}/>

  </div>
  <div class="mb-2">
    <input type="text" class="form-control" id="exampleInputTéléphone1" aria-describedby="TéléphoneHelp" placeholder='Saisissez votre Téléphone' onChange={(e)=>setPhone(e.target.value)} value={phone}/>
  </div>

  <div class="mb-2">

    <input type="text" class="form-control" id="exampleInputVille1" aria-describedby="VilleHelp" placeholder='Saisissez votre Ville' onChange={(e)=>setCity(e.target.value)} value={city}/>

  </div>

  <button type="submit" class="btn btn-success d-flex flex-end">envoyer</button>
</form>
                 </div>
           
               </div>
             </div>
           </div>
           </div>
           }
        </div>
        
    </div>
  )
}
