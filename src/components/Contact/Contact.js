import React,{useState} from 'react'
import { DevisContact } from '../Devis/DevisContact'

export const Contact = () => {
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [address,setAddress]=useState('')
    const [postal_code,setPostal_code]=useState('')
    const [city,setCity]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [service,setService]=useState('')
    const [message,setMessage]=useState('')

    // const sendContact=async(data)=>{
    //     const request=await fetch(`http://127.0.0.1:8000/api/contacts/`,{
    //         method:"POST",
    //         body:data
    //     })

    //     const status=request.status

    //     switch(status){
    //         case 201:
    //             alert("object created successfully")
    //             break
    //         default:
    //             alert("somthing went wrong")
    //             break
    //     }
    // }

    const onSubmit=async (event) => {
        event.preventDefault();
      
        const formdata= new FormData()
        formdata.append('firstname',firstname)
        formdata.append('lastname',lastname)
        formdata.append('address',address)
        formdata.append('postal_code',postal_code)
        formdata.append('city',city)
        formdata.append('city',city)
        formdata.append('phone',phone)
        formdata.append('email',email)
        formdata.append('service',service)
        formdata.append('message',message)
      
        try {
          const response = await fetch('/app/api/contacts/', {
            method: 'POST',
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            body: formdata, // Convert data to JSON format
          });
      
          const result = await response.json();
          alert('Votre demande est envoyée avec succé');
        } catch (error) {
            alert('Votre demande n\'est pas envoyée, reéssayez plus tard');
        }
      }


    return (
        <section id='devis'>
            <div className='primary-overlay'>
            <div  className='container rmPadding p-3'>
                <div className='row'>
                <div className='col-lg-4'>
                        <h4 style={{width:"100%"}}></h4>
                    </div>
                    <div className='col-lg-8'>
                        <h4 className='devisTitle'>CONTACTER NOUS</h4>
                    </div>
                    {/* <div className='col-lg-4'>

                    </div> */}
                </div>
                <div className='row'>
                        
                <div className='col-lg-8 order-md-2 '>
                <form onSubmit={onSubmit} className='flexColArround'>
                        <div className='row w100'>
                  
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder=" Votre nom*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder=" Votre prenom*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setAddress(e.target.value)} value={address} placeholder="Votre adresse"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setPostal_code(e.target.value)} value={postal_code} placeholder=" Code Postal*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setCity(e.target.value)} value={city} placeholder="Ville*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder="Numéro de téléphone*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Adresse e-mail*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{height:57}} onChange={(e)=>setService(e.target.value)} value={service} placeholder="Le type de service souhaité *"/>
                                </div>

                            </div>
                        </div>

                        <div className='row w100'>
                            <div className='col-md-12'>
                                <div class="input-group  input-group-lg mb-3">

                                    <textarea type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" rows={4} onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Message ou toute autre information que vous jugez utile'/>
                                </div>

                            </div>
                            <div className='col flexColCenter m-2'>
                    <button type='submit' className='filledButton'>Envoyer</button>
                    </div>

                        </div>
                 



                        </form>
                  
                    </div>
                <div className='col-lg-4 order-md-1'>
                    
                    <DevisContact link={"https://www.youtube.com/embed/vDhscwi3ulI?si=Vahoz55R8XaHMTM_"}/>

                    </div>
                    
          


                </div>

            </div>
            </div>
        </section>
    )
}
