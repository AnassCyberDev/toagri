import React, { useState } from 'react';
import vector from "../Styling/img/Vector.svg";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import polygone from '../Styling/img/Polygon.svg'


export const Header3 = ({isopen ,isAuthenticated}) => {
  const [show, setShow] = useState(false);

  const [horaire1,setHoraire1]=useState('')
  const [horaire2,setHoraire2]=useState('')
  const [horaire3,setHoraire3]=useState('')
  const [horaire4,setHoraire4]=useState('')
  const [phone,setPhone]=useState('')
  // const [longueur,setLongueur]=useState(120)

  const toggleShow = () => {
    setShow(prevState => !prevState);
  
  };

  const scheduale=(ischecked,time)=>{
    if (ischecked){
      setHoraire1(time)
    }
  }

  const scheduale2=(ischecked,time)=>{
    if (ischecked){
      setHoraire2(time)
    }
  }

  const scheduale3=(ischecked,time)=>{
    if (ischecked){
      setHoraire3(time)
    }
  }

  const scheduale4=(ischecked,time)=>{
    if (ischecked){
      setHoraire4(time)
    }
  }



  // const toggleLongueur=()=>{
  //   switch(longueur){
  //     case 120:
  //       setLongueur(240)
  //       break
  //     default:
  //       setLongueur(120)
  //   }
  // }

  const handleClickInside = (e) => {
    e.stopPropagation();
  };


  const sendCall_request=async(data)=>{
    const request=await fetch(`/app/api/call_request/`,{
        method:"POST",
        body:data
    })

    const status=request.status

    switch(status){
        case 201:
            alert("object created successfully")
            break
        default:
            alert("somthing went wrong")
            break
    }
}


const onSubmit=async(e)=>{
    e.preventDefault()
    const formdata= new FormData()
    formdata.append('phone',phone)
    formdata.append('horaire',JSON.stringify([horaire1,horaire2,horaire3,horaire4]))

    sendCall_request(formdata)

    
}

if(isAuthenticated){
  return  (<div style={{minHeight:100}}>
    
  </div>)
}

  return (
    <div id='header3' className={isopen?"flexRowCenter fixed-top-3-bis":"flexRowCenter fixed-top-3"}>
      <div className='flexColCenter' style={{ textAlign: "center", color: "white", paddingInline: 20 }}>
        <p className='header3P'>
        Besoin d’un conseil pour la gestion ou l’optimisation de votre élevage ? on vous rappelle immédiatement, 
          <span 
            onClick={toggleShow} 
            style={{ textDecoration: "underline", fontWeight: "500",marginLeft:5, marginRight: 10, cursor: 'pointer', position: 'relative' }}
          >
            cliquez ici
            {show && (
              <>
              <img src={polygone} className='polygone'/>
              <div 
                className='fluid-container pop-up' 
                
                onClick={handleClickInside}
              >
                <div className='flexColCenter'>
                  <div className='text1' style={{width:"100%",textAlign:"start",color:"black"}}>Vous souhaitez être appelé ?</div>
                    <div className="input-group mb-3" style={{width:"100%"}}>
                      <span className="input-group-text" id="basic-addon1" style={{ width: "18%",fontSize:15,backgroundColor:"white" }}><span className="fi fi-ma"></span></span>
                      <input type="text" className="form-control" placeholder="+212  00 00 00 00 00" aria-label="Username" aria-describedby="basic-addon1" style={{width: "82%",fontSize:10,borderRadius:"0px 10px 10px 0px" }} onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                    </div>
                 
                  <form onSubmit={onSubmit}>
                    <div className="input-group mb-3">
                      <div className="form-select" id="inputGroupSelect01" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{textAlign:"start", height: "30px", width: "260px",fontSize:12,fontFamily: 'Roboto', fontWeight: "400",borderRadius:10}} >
                        {/* <option selected style={{fontSize:12,fontFamily: 'Roboto',fontWeight: "400",borderBottom:"solid 0.5px gray"}}>Choose the time </option>
                        <option value="1" style={{fontSize:12,fontFamily: 'Roboto',fontWeight: "400",borderBottom:"solid 0.5px gray"}}>One</option>
                        <option value="2" style={{fontSize:12,fontFamily: 'Roboto',fontWeight: "400",borderBottom:"solid 0.5px gray"}}>Two</option>
                        <option value="3" style={{fontSize:12,fontFamily: 'Roboto',fontWeight: "400",borderBottom:"solid 0.5px gray"}}>Three</option> */}
                        Choisissez votre crénau 
                      </div>
                      <div class="collapse" id="collapseExample" style={{width:"100%"}}>
  <div class="card card-body">
   <ul className='horaire'>
    <li className='horaire-item'>
    <div class="form-check d-flex align-items-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>scheduale(e.target.checked,'08am - 10am')}/>
  <label class="form-check-label ms-2" for="flexCheckDefault">
  08am - 10am
  </label>
</div>
     
      </li>
    <li className='horaire-item'>
    <div class="form-check d-flex align-items-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>scheduale2(e.target.checked,'10am - 12am')}/>
  <label class="form-check-label ms-2 d-flex align-items-center" for="flexCheckDefault">
  10am - 12am
  </label>
</div>
      </li>
    <li className='horaire-item'>
    <div class="form-check d-flex align-items-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>scheduale3(e.target.checked,'02pm - 04pm')}/>
  <label class="form-check-label ms-2" for="flexCheckDefault">
  02pm - 04pm
  </label>
</div>
    </li>
    <li className='horaire-item'>
    <div class="form-check d-flex align-items-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>scheduale4(e.target.checked,'04pm - 06pm')}/>
  <label class="form-check-label ms-2" for="flexCheckDefault">
  04pm - 06pm
  </label>
</div>
     </li>
   </ul>
   
  </div>
  <button type='submit'  class="btn" style={{backgroundColor:'#E75D0E',color:'white',marginTop:10,width:100,height:30,fontSize:12}}>Envoyer</button>
</div>
                    </div>
                  </form> 
                  {/* here */}
                </div>
              </div></>
            )}
          </span>
          <img src={vector} alt="vector icon" />
        </p>
      </div>
    </div>
  );
};
