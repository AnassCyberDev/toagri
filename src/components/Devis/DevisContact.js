import React from 'react'
import { IconContext } from 'react-icons';
import { FaRegEnvelope} from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import location from "../Styling/img/icons_300/location_300.svg"
import mail  from '../Styling/img/icons_300/mail_300.svg'
import clock  from '../Styling/img/icons_300/clock_300.svg'
import phone  from '../Styling/img/icons_300/call_300.svg'

// import { FaRegCircleUser,FaRegCircleQuestion } from "react-icons/fa6";
// import { IconContext } from 'react-icons';

export const DevisContact = ({link}) => {
  return (
    <div className='flexColStart' id='devisContact'>
            <div className='devisRowStart m-2'>
                    {/* <IconContext.Provider
                value={{ className: "iconDevis" }}
              >
                <div>
                  <GoLocation />
                </div>
              </IconContext.Provider> */}
              <div className='iconDevis flexColCenter'>
<img src={location} />
</div>
              <div className='devisColStart ms-4'>
                            <div className='titleDevisContact'>Localisation</div>
                            <div className='contentDevisTitle'>Interventions sur toute la France</div>
                        </div>
                 
                    </div>
              <div className='devisRowStart m-2'>
                    {/* <IconContext.Provider
                value={{ className: "iconDevis" }}
              >
                <div>
                  <FaRegEnvelope />
                </div>
              </IconContext.Provider> */}
              <div className='iconDevis flexColCenter'><img src={mail}/>
                     </div>
                        <div className='devisColStart ms-4'>
                            <div className='titleDevisContact'>Email</div>
                            <div className='contentDevisTitle'>contact@mikaza-renov.fr</div>
                        </div>
                    </div>
                    <div className='devisRowStart m-2'>
                    {/* <IconContext.Provider
                value={{ className: "iconDevis" }}
              >
                <div>
                  <MdOutlinePhone />
                </div>
              </IconContext.Provider> */}
<div className='iconDevis flexColCenter'><img src={phone}/>
       </div>
              <div className='devisColStart ms-4'>
                            <div className='titleDevisContact'>Numéro de téléphone</div>
                            <div className='contentDevisTitle'>+33 (0)7 67 32 10 18</div>
                        </div>
                    
                    </div>
                    <div className='devisRowStart m-2'>
                    {/* <IconContext.Provider
                value={{ className: "iconDevis" }}
              >
                <div>
                  <FaRegClock />
                </div>
              </IconContext.Provider> */}
<div className='iconDevis flexColCenter'><img src={clock}/>
       </div>
              <div className='devisColStart ms-4'>
                            <div className='titleDevisContact'>Horaires</div>
                            <div className='contentDevisTitle'>Lun - Sam 8h – 12h / 14h - 17h</div>
                        </div>
                 
                    </div>

                    <div className='flexRowCenter' style={{ width: "100%", padding: 10, borderRadius: 10 }}>
  <iframe
    width="90%"
    height="250"
    src={link}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{ borderRadius: 10 }}
  ></iframe>
</div>


                
    </div>
  )
}
