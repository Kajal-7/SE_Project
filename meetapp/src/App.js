import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/FAQ";
import PrivateMeet from "./pages/PrivateMeet";
import KeynoteSession from "./pages/KeynoteSession";
import InvitedTalk from "./pages/InvitedTalk";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import Navbar from "./components/Navbar/Navbar.js"

function App() {
    return ( 
    <div className = "App" >

        {/* <Navbar / > */}
        <Router >
        <Routes >
        <Route exact path = "/"
        element = { < Navbar/ > }
        /> <
        Route path = "/dashboard"
        element = { < Dashboard / > }
        />  <
        Route path = "/faq"
        element = { < Faq / > }
        /> <
        Route path = "/privatemeet"
        element = { < PrivateMeet / > }/>
         <Route path = "/keynotesession"
        element = { < KeynoteSession / > }
        /> <
        Route path = "/invitedtalk"
        element = { < InvitedTalk / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < Register / > }/> 
        </Routes> 
        </Router> 
        </div>
    );
}

export default App;