import React, { useState } from 'react'
import "./Devis.css"
import { DevisContact } from './DevisContact'
import { useSelector } from 'react-redux'

export const Devis = ({ip_address,product}) => {

    const user=useSelector(state=>state.user.user)
    const [firstname,setFirstame]=useState(user?user.username:'')
    const [lastname,setLastname]=useState('')
    const [address,setAddress]=useState('')
    const [organization,setOrganization]=useState('')
    const [city,setCity]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [service,setService]=useState(product)
    const [message,setMessage]=useState('')

    const sendContact=async(data)=>{
        const request=await fetch(`${ip_address}/app/api/devis/`,{
            method:"POST",
            body:data
        })

        const status=request.status

        switch(status){
            case 201:
                alert("votre demande est envoyée avec succée")
                break
            default:
                alert("somthing went wrong")
                break
        }
    }


    const onSubmit=async(e)=>{
        e.preventDefault()
        const formdata= new FormData()
        formdata.append('firstname',firstname)
        formdata.append('lastname',lastname)
        formdata.append('address',address)
        formdata.append('organization',organization)
        formdata.append('city',city)
        formdata.append('phone',phone)
        formdata.append('email',email)
        formdata.append('service',service)
        formdata.append('message',message)
        sendContact(formdata)

        
    }


    return (
        <section id='devis'>
            <div className='primary-overlay'>
            <div  className='container'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <h4 className='devisTitle'>DEMANDER UN DEVIS</h4>
                    </div>
                    <div className='col-lg-4'>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-8 flexColArround'>
                    <form onSubmit={onSubmit} className='flexColArround' style={{width:"100%"}}>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setFirstame(e.target.value)} value={firstname} style={{height:57}} placeholder=" Votre nom*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setLastname(e.target.value)} value={lastname} style={{height:57}} placeholder=" Votre prenom*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setAddress(e.target.value)} value={address} style={{height:57}} placeholder="Votre adresse"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setOrganization(e.target.value)} value={organization} style={{height:57}} placeholder=" Organization*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setCity(e.target.value)} value={city} style={{height:57}} placeholder="Ville*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setPhone(e.target.value)} value={phone} style={{height:57}} placeholder="Numéro de téléphone*"/>
                                </div>

                            </div>
                        </div>
                        <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setEmail(e.target.value)} value={email} style={{height:57}} placeholder="Adresse e-mail*"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setService(e.target.value)} value={service} style={{height:57}} placeholder="Le type de service souhaité *"/>
                                </div>

                            </div>
                        </div>
                        {/* <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setCapacity(e.target.value)} value={capacity} style={{height:57}} placeholder="La capacité de votre cuve à fioul"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                            <div className="input-group input-group-lg mb-3">
    <select 
        className="form-select trensparent-bg" 
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-sm" 
        onChange={(e) => setBuried(e.target.value)} 
        value={buried} 
        style={{ height: 57 }}
    >
        <option value="" disabled>Selectionner une option</option>
        <option value="Cuve enterrée">Cuve enterrée</option>
        <option value="Cuve non enterrée">Cuve non enterrée </option>

    </select>
</div>

                            </div>
                        </div> */}
                        {/* <div className='row w100'>
                            <div className='col-md-6'>
                                <div class="input-group  input-group-lg mb-3">

                                    <input type="text" class="form-control trensparent-bg" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>setAccessibility(e.target.value)} value={accessibility} style={{height:57}} placeholder="Accessibilité"/>
                                </div>

                            </div>
                            <div className='col-md-6'>
                            <div className="input-group input-group-lg mb-3">
    <select 
        className="form-select trensparent-bg" 
        aria-label="Sizing example input" 
        aria-describedby="inputGroup-sizing-sm" 
        onChange={(e) => setPlug(e.target.value)} 
        value={plug} 
        style={{ height: 57 }}
    >
        <option value="" disabled>Prise electrique à proximité ?</option>
        <option value="oui">Oui</option>
        <option value="non">Non </option>

    </select>
</div>

                            </div>
                        </div> */}
                        <div className='row w100'>
                            <div className='col-md-12'>
                                <div class="input-group  input-group-lg mb-3">
                                    <textarea class="form-control trensparent-bg" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Message ou toute autre information que vous jugez utile'></textarea>
                                </div>

                            </div>
                            <div className='col-lg-12 flexColCenter m-2'>
<button className='filledButton'>Envoyer</button>
                    </div>

                        </div>
                        </form>

{/* here */}
                    </div>
                    <div className='col-lg-4 rmPadding'>
                    
                    <DevisContact link={"https://www.youtube.com/embed/CG4Y1r3fuic?si=NTk7X8Hr65txz5RO"}/>

                    </div>


                </div>

                {/* <div className='row'>
                    <div className='col-lg-8 flexColCenter m-2'>
<button className='filledButton'>Envoyer</button>
                    </div>
                    <div className='col-lg-4'>

                    </div>
                </div> */}
            </div>
            </div>
        </section>
    )
}
