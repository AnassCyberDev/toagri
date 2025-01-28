import React from 'react';

export const Title = ({ text }) => {
  return (
    <div style={{ display: 'flex',flexDirection:"column", justifyContent: 'center', alignItems: 'center', marginBottom: 30,marginTop:30 }}>
      <h4 className='faqTitle flexColCenter' style={{ margin: 0, textAlign: 'center', maxWidth: '100%',color:" #212529" }}>
        {text}
        <div style={{width:"40%",borderBottom:"solid 3px #f7c35f"}}></div>
      </h4>
      
    </div>
  );
};

