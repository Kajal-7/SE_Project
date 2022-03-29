import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
    <span style={{marginRight: "5rem"}}><Link to={"/dashboard"}>Conference</Link> </span>
    <span style={{marginRight: "5rem"}}><Link to={"/privatemeet"}>Private Meet</Link> </span>
    <span style={{marginRight: "5rem"}}><Link to={"/faq"}>FAQ</Link> </span>
    <span style={{marginRight: "5rem"}}><Link to={"/keynotesession"}>Keynote Session</Link></span>
    <span style={{marginRight: "5rem"}}><Link to={"/invitedtalk"}>Invited Talks</Link> </span>
    </div>
  )
}

export default Navbar