import React from 'react';
import "./Faq.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IconContext } from 'react-icons';

export const FaqCollapse = ({ question, id, isOpen, onToggle, children }) => {
  const collapsingIcon = () => (
    <IconContext.Provider value={{ className: "iconFaq" }}>
      <div>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>
    </IconContext.Provider>
  );

  return (
    <div style={{ width: "100%" }}>
      <div className='flexRowBetween'  onClick={onToggle} style={{cursor:"pointer"}}>
        <p className='faqQuestion'>{question}</p>
        <div>
          {collapsingIcon()}
        </div>
      </div>
      
      <div className={`collapse ${isOpen ? 'show' : ''}`} id={`collapse_${id}`}>
        <div className="card card-body faqParagraphe">
          {children}
        </div>
      </div>
    </div>
  );
};
