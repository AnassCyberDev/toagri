import React from 'react'

export const OneService = ({text,image,title}) => {
  return (
    <div className="card cardWidth" style={{border:"solid grey 0.5px",textAlign:"center"}}>
    <img src={image} className="card-img-top cardImage" alt="..."  />
    <div className="card-body">
      <h5 className="cardTitle">{title}</h5>
      <p className="cardText">{text}</p>
      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
    </div>
  </div>

  )
}
