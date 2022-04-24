import React from 'react'
import cam from "../../assets/startPic.png" 
//import './card-style.css'
import './Invited.css'
import navbar from '../Navbar/Navbar.js'

const ResearchUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className="card text-center" style={{backgroundColor: "rgba(0, 1, 2, 0.8)"}}>
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body text-dark">
       <h4 className="card-title" style={{color: "rgba(255, 255, 170, 0.8)"}}>{props.title}</h4>
       <p className="card-text " style={{color: 'white'}}>
           {/* lorem epsum kkjjedhjdkehkehkehekhdkgdjgd ejgejkegkjehkejlelel dfjfhmh hgkfkg, gfkbbj jhfitoihk fyiuto8ln h7itig,j gukfkliyyftd ghli,jb fjyfhjmh oufjdgrsxcm dgcmv,luiu gdhtdrsh fiyfk */}

           {props.content}
       </p>
       <a href="#" className="btn btn-outline" id="buttons">Go Anywhere</a>
   </div>


   </div>
   </div>

  )
}

export default ResearchUI
