import React from 'react'
import cam from "../../assets/startPic.png"
//import './card-style.css'
import './Invited.css'
import navbar from '../Navbar/Navbar.js'

const PosterUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed"  className="card text-center" style={{backgroundColor: "rgba(255,255,255,0.8"}}>
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body text-dark">
   <h6 className="carddate" style={{color: "rgba(0, 0, 0, 1)"}}>{props.date}</h6>
   <br></br>
       <h4 className="card-title" style={{color: "rgba(186, 85, 211, 1)"}}>{props.title}</h4>
    
       <br></br>
       <h5 className="card-host" style={{color: "rgba(254, 78, 218, 1)"}}>{props.host}</h5>
     
       <br></br>
       <h6 className="card-host" style={{color: "rgba(0, 0, 0, 1)"}}>{props.Time}</h6>
       {/* <p className="card-text " style={{color: 'white'}}>
        

           {props.content}
       </p> */}
       {/* <p className="card-text " style={{color: 'white'}}>
          
           {props.date}
       </p> */}

<br></br>
       <br></br>
       <a href="#" className="btn btn-outline" id="buttons"  style={{background:
                    "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",border: "none"}}>View Details</a>
   </div>

   </div>
   </div>

  )
}

export default PosterUI
