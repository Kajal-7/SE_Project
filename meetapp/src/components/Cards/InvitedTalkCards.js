import React,{Component} from 'react'
import Card from './InvitedUI'
import cam from "../../assets/startPic.png" 
import research from "../../assets/research.png"
import navbar from '../Navbar/Navbar.js'
import getstarted from "../../assets/startPic.png";
//import "./Invited.css"


class InvitedTalkCards extends Component {
     render(){
         return(
            //  <div><navbar/>
               
            <div>
       
            
             <div className="container-fluid d-flex justify-content-center" id="InvTalks">
               {/* <img className="background" src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="Aleq"></img> */}
              
               <div className="row" >

               
{/* <div className="row"> */}


<div className="col-sm-12 col-md-6 col-lg-4" id="first"  >
<Card imgsrc="https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  
url="/meet-display"
date="Sun 23 Apr 22" host="IIITA Info Communication Incubation Center IIIC" title="Manas Mukharjee Keynote Talk" Time="12:45 PM - 01:45 PM IST" />

</div>
<div className="col-sm-12 col-md-6 col-lg-4" id="first">
<Card imgsrc="https://images.pexels.com/photos/64057/pexels-photo-64057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
url="/meet-display" date="Sun 11 Apr 21" host="Aparoksha, Allahabad" title=" Aparoksha'21 IIIT Allahabad" Time="03:30 PM - 11:30 PM IST" />
</div>
<div className="col-sm-12 col-md-6 col-lg-4" id="first">
<Card imgsrc="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" url="/meet-display" date="Sat 13 Mar 21" host="SHOURYA" title="SheHacks'21" Time="03:30 PM - 11:30 PM IST" />
</div>
<div className="col-sm-12 col-md-6 col-lg-4" id="sec">
 <Card imgsrc="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" url="/meet-display" date="Sun 11 Apr 21" host="Hack in the North" title="HINT" Time="03:30 PM - 11:30 PM IST" />

</div>
<div className="col-sm-12 col-md-6 col-lg-4" id="sec">
 <Card imgsrc="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  url="/meet-display" date="Sun 11 Apr 21" host="Sanjay DSouza" title="English and American Studies" Time="03:30 PM - 11:30 PM IST" />

</div>
<div className="col-sm-12 col-md-6 col-lg-4" id="sec">
 <Card imgsrc="https://images.unsplash.com/photo-1576085898323-218337e3e43c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" url="/meet-display" date="Sun 11 Apr 21" host="Shambhunath Institute of Engineering and Technology" title=" Smart Infrastructure" Time="03:30 PM - 11:30 PM IST" />

</div>

</div> 

                      

                               </div>
                               </div>
        
           
             
         )
     }
}
export default InvitedTalkCards