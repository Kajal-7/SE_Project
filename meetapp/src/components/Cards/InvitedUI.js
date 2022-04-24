import React from 'react'
import cam from "../../assets/startPic.png" 
//import './card-style.css'
import './Invited.css'
import navbar from '../Navbar/Navbar.js'

const InvitedUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed"  className="card text-center" style={{backgroundColor: "rgba(0, 1, 2, 0.8)"}}>
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <br></br>
       
   <div className="card-body text-dark">
   <h6 className="carddate" style={{color: "rgb(246, 251, 243)"}}>{props.date}</h6>
   <br></br>
       <h4 className="card-title" style={{color: "rgba(255, 255, 170, 0.8)"}}>{props.title}</h4>
    
       <br></br>
       <h5 className="card-host" style={{color: "rgba(255, 255, 170, 0.8)"}}>{props.host}</h5>
     
       <br></br>
       <h6 className="card-host" style={{color: "rgba(255, 255, 170, 0.8)"}}>{props.Time}</h6>
       {/* <p className="card-text " style={{color: 'white'}}>
        

           {props.content}
       </p> */}
       {/* <p className="card-text " style={{color: 'white'}}>
          
           {props.date}
       </p> */}

<br></br>
       <br></br>
       <a href="#" className="btn btn-outline" id="buttons">View Details</a>
   </div>

   </div>
   </div>

  )
}

export default InvitedUI
