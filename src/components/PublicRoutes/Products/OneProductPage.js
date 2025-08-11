import React, { useState, useEffect } from 'react'
import { ProductCarousel } from './ProductCarousel';
import { useSelector } from 'react-redux';
import { addItem } from '../../../actions/cartActions';
import addToCartAnounymous from '../../../utils/utils';
import './Products.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const OneProductPage = ({ ip_address, id }) => {

  const navigate = useNavigate()
  const user = useSelector(state => state.user)
  const categoriesUnderDevis=['semence','semence1','semence2','semence3']
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()

  const quantityPositive = (e) => {
    if (e.target.value > 0) {
      setQuantity(e.target.value)
    }


  }

  const fetchProduct = async () => {

    const request = await fetch(`${ip_address}/app/api/product-images/${id}`, {


    })

    const resp = await request.json()
    return resp
  }
  useEffect(() => {
    const getProduct = async () => {
      const produit = await fetchProduct()

      setProduct(produit)
    }

    getProduct()
  }, [user])





  const addToCart = async () => {
    if (user.isAuthenticated) {
      const formdata = new FormData()
      formdata.append('product_id', id)
      formdata.append('quantity', quantity)

      dispatch(addItem(formdata, localStorage.getItem('token')))
    }

    else {

      addToCartAnounymous(id, quantity)

    }
    navigate('/Cart')
  }



  if (!product.data) {
    return <>waithing</>
  }
  return (
    <section id='oneProduct' className='container p-5'>
      <div className="row">
        <div className="col-lg-7">
          {product.data.length > 0 && <ProductCarousel product={product.data || []} ip_address={ip_address} />}
        </div>
        <div className="col-lg-5 p-3">
          <div className="flexColStart">
            <div className="productCategory">{product.category}</div>
           {categoriesUnderDevis.includes(product.category) &&<div className="redRq">
              <p className="red" style={{color:'red',fontSize:12}}>Pour acheter ce produit , vous devez remplir un formulaire</p>
            </div>}
            <h2 className='productTitle'>{product.name}</h2>
            <h5 className='productPrice'><span className='price'>Price</span> {product.price}  MAD</h5>
            <p className='productDescription'>{product.description}</p>
            <input type="number" className='form-control' onChange={(e) => {
              if (e.target.value > 0) {
                setQuantity(e.target.value)
              }
            }} value={quantity} />
            <div>
             {!categoriesUnderDevis.includes(product.category) ? <button className='btn btn-success mt-4' onClick={addToCart}>Add To Cart</button>:
             <button className='btn btn-success mt-4' onClick={()=>navigate(`/Devis/${product.name}`)}>Remplir formulaire</button>}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
