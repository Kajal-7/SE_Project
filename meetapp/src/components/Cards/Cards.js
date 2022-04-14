import React,{Component} from 'react'
import Card from './CardsUI'
import cam from "../../assets/startPic.png" 
import navbar from '../Navbar/Navbar.js'


class Cards extends Component {
     render(){
         return(
            //  <div><navbar/>

            
             <div className="container-fluid d-flex justify-content-center">
                 <div className="row">

                     
                         <div className="row">

                        
                     <div className="col-sm-6 col-md-6" id="first">
                         <Card imgsrc={cam}/>

                     </div>
                     <div className="col-sm-6 col-md-6" id="sec">
                     <Card imgsrc={cam}/>
                     </div>
                     <div className="col-sm-6 col-md-6" id="first">
                     <Card imgsrc={cam}/>
                     </div>
                     <div className="col-sm-6 col-md-6" id="sec">
                          <Card imgsrc={cam}/>
                        
                     </div>
                     </div>
                     {/* <div className="col-sm-6 col-md-6">
                     <div className="row">
                         <img src={cam} class="responsive"/> </div>
                         </div> */}
                               
                 </div>
             </div>
            //  </div>
         )
     }
}
export default Cards