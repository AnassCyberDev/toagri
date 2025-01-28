import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FaRegCircleUser,FaRegCircleQuestion } from "react-icons/fa6";
import question from '../Styling/img/icons_300/help_28_300.svg'
import user_300 from '../Styling/img/icons_300/user_28_300.svg'
import { IconContext } from 'react-icons';
import "./Header.css"
import { Link } from 'react-router-dom';
import location from '../Styling/img/icons_300/location_21_wght500.svg'

export const Header1 = () => {
    return (
        <div id='header1' className='fixed-top-1'>
            <div className='row ms-2'> 
                <div className='col-lg-8 flexRowCenter'>
                    <div className='flexRowCenter me-3'>
                    <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                  <FaRegEnvelope />
                </div>
              </IconContext.Provider>
                        <div className='header1Title'>contact@toagri.com</div>
                    </div>
                    <div className='flexRowCenter me-3'>
                    <IconContext.Provider
                value={{ className: "icons" }}
              >
                <div>
                  <MdOutlinePhone />
                </div>
              </IconContext.Provider>
                    <div className='header1Title'>+212 (0)6  11 22 33 44</div>
                    </div>
                    {/* <div className='flexRowCenter me-3'>
                    <img src={location} className='icons'/>
                    <div className='header1Title'>Interventions sur toute la France</div>
                    </div> */}
                </div>
                <div className='col-lg-4  flexRowCenter'>
                  
                </div>
            </div>
        </div>
    )
}
