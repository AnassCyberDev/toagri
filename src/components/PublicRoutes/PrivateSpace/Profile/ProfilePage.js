import React, { useEffect, useState} from 'react'
import {FaPencilAlt} from "react-icons/fa"
// import { useTranslation} from "react-i18next";
// import Footer from '../footer/Footer';
import './Profile.css'
import { useSelector } from 'react-redux'



export const ProfilePage = ({ip_address}) => {

    // const {t} = useTranslation()
    const user=useSelector(state=>state.user)
    const [fname, setFname]=useState(user.user.firstname)
    const [lname, setLname]=useState(user.user.lastname)
    const [email, setEmail]=useState(user.user.email)
    const [phone,setPhone]=useState(user.user.phone)
    const [password,setPassword]=useState('')
    const [conpass,setConpass]=useState('')
    const [image,setImage]=useState(user.user.image)
    const [selectedFile, setSelectedFile] = useState(null);
    const [changed_items,setChanged_items]=useState({})
    const[url,setUrl]=useState(`${ip_address}/media/${user.user.image}`)




    const saveUser = async(data)=>{
        const response= await fetch(`${ip_address}/app/api/users/${user.user.user_id}/`,{
            method:'PATCH',
            headers:{
                Authorization:`Token ${user.token}`
            },
            body:data})

        const data1= response.json()
        console.log(data1)
            }

        const onSubmit=(e)=>{
            e.preventDefault()
            const formdata = new FormData()
            Object.keys(changed_items).forEach((item) => {
                formdata.append(item,changed_items[item])
                console.log(item,changed_items[item])
              })

            // formdata.append('password',password)

            if(typeof image!=='string'){
            formdata.append('photo',image)
            }
            saveUser(formdata)
            // if (password===conpass){
            //     saveUser(formdata)
            //     alert('your profile was updated successfully')
            //     window.location.reload()

            // }else{
            //     setConpass('')
            //     setPassword('')
            //     document.getElementById('messagePass').innerHTML=`<h6 style="padding-top:10px;height:50px;color:red;">${('password does not match')}</h6>`
            // }
            
            //window.location.reload(true)
        }

        const readURL= async (e)=>{
            if (e.target.files && e.target.files[0]) {
                console.log(e.target.files[0])
                
                var reader = new FileReader();
                reader.onload = function(e) {
                  
                    setUrl(e.target.result)
                }
                reader.readAsDataURL(e.target.files[0]);
                setImage(e.target.files[0])
            }
        }

  return (
 
        <section id="user-profile" className="user-profile">
    <div className="container">
       
            {/* <div className="col-xs-12 col-sm-12 col-md-4">
                <div className="edit--profile-area">
                    <ul className="edit--profile-links list-unstyled mb-0">

                        <li><a href={`/mesbiens/${id}`}>{("Mes annonces")}</a></li>
                        
                        <li><a href={"/proprety"}>{("add property")}</a></li>
                    </ul>
                </div>
            </div> */}
<form  className="mb-0" onSubmit={onSubmit}>
<div className="row">
            <div className="col-md-6">


                <div className="form-box">
         <div className='primary-overlay'>
        <div className="avatar-upload">
            <div className="avatar-edit">
            
                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e)=>readURL(e)}/>
                <label for="imageUpload" style={{"textAlign":"center"}} ><FaPencilAlt/></label>
            </div>
            <div className="avatar-preview">
                <div id="imagePreview" style={{"background-image": `url(${localStorage.getItem('googlePic')?localStorage.getItem('googlePic'): url})`}}>
                </div>
            </div>
        </div></div> </div>


                    </div>
                    <div className="col-md-6">
                        <div className="form-box">
                        <h4 className="form--title">{("Personal Details")}</h4>
                        <div className="form-group">
                            <label for="first-name">{("First Name")}</label>
                            <input type="text" className="form-control" name="first-name" id="first-name" onChange={(e)=>{setFname(e.target.value);changed_items["first_name"]=e.target.value}} value={fname} />
                        </div>
                     
                        <div className="form-group">
                            <label for="last-name">{("last Name")}</label>
                            <input type="text" className="form-control" name="last-name" id="last-name" onChange={(e)=>{setLname(e.target.value);changed_items["last_name"]=e.target.value}} value={lname}/>
                        </div>
                     
                        <div className="form-group">
                            <label for="email-address">{("email")}</label>
                            <input type="email" className="form-control" name="email-address" id="email-address" onChange={(e)=>{setEmail(e.target.value);changed_items["email"]=e.target.value}} value={email}/>
                        </div>
                     
                        <div className="form-group">
                            <label for="phone-number">{("N de Téléphone")}</label>
                            <input type="text" className="form-control" name="phone-number" id="phone-number" onChange={(e)=>{setPhone(e.target.value);changed_items["phone"]=e.target.value}} value={phone}/>
                        </div>
                     
                   
                    
                    </div>
                
                    {/* <div className="form-box">
                        <h4 className="form--title">{("Change")} {("password")}</h4>
                        <div id='messagePass' style={{"backgroundColor":"rgba(255,0,0,0.5)","textAlign":"center"}}></div>
                        <div className="form-group">
                            <label for="password">{("password")}</label>
                            <input type="password" className="form-control" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        </div>
                  
                        <div className="form-group">
                            <label for="confirm-password">{("confirm")}  {("password")}</label>
                            <input type="password" className="form-control" name="confirm-password" id="confirm-password" onChange={(e)=>setConpass(e.target.value)} value={conpass}/>
                        </div>
                   
                    </div> */}
             
                    <input type="submit" value={("Save Edits" )}name="submit" className="btn btn-primary" />
                 
                    </div>
                    </div>
                </form>
            
           
        </div>

 
</section>

  )
}


