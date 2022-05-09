import React from 'react'
import cam from "../../assets/startPic.png" 

import './Invited.css'
import navbar from '../Navbar/Navbar.js'

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className="card text-center" style={{backgroundColor: "rgba(255,255,255,0.8"}}>
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body text-dark">
       <h4 className="card-title" style={{color: "rgba(0, 0, 0, 1)"}}>{props.title}</h4>
       <p className="card-text " style={{color: "rgba(186, 85, 211, 1)"}}>
           {/* lorem epsum kkjjedhjdkehkehkehekhdkgdjgd ejgejkegkjehkejlelel dfjfhmh hgkfkg, gfkbbj jhfitoihk fyiuto8ln h7itig,j gukfkliyyftd ghli,jb fjyfhjmh oufjdgrsxcm dgcmv,luiu gdhtdrsh fiyfk */}

           {props.content}
       </p>
       <a href={props.url} className="btn btn-outline" id="buttons" style={{background:
                    "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",border: "none"}}>View details</a>
   </div>

   </div>
   </div>

  )
}

export default CardsUI
