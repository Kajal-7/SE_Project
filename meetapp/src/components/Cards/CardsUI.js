import React from 'react'
import cam from "../../assets/startPic.png" 
import './card-style.css'
import navbar from '../Navbar/Navbar.js'

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div className="card text-center">
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body text-dark">
       <h4 className="card-title">Card title</h4>
       <p className="card-text text-secondary">
           lorem epsum kkjjedhjdkehkehkehekhdkgdjgd ejgejkegkjehkejlelel dfjfhmh hgkfkg, gfkbbj jhfitoihk fyiuto8ln h7itig,j gukfkliyyftd ghli,jb fjyfhjmh oufjdgrsxcm dgcmv,luiu gdhtdrsh fiyfk
       </p>
       <a href="#" className="btn btn-outline-success">Go Anywhere</a>
   </div>

   </div>
   </div>

  )
}

export default CardsUI
