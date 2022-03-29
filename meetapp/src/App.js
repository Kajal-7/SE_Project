import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/FAQ";
import PrivateMeet from "./pages/PrivateMeet";
import KeynoteSession from "./pages/KeynoteSession";
import InvitedTalk from "./pages/InvitedTalk";

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route exact path="/" element={<GetStarted />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/faq" element={<Faq />} />
          <Route path="/privatemeet" element={<PrivateMeet/>} />
          <Route path="/keynotesession" element={<KeynoteSession/>} />
          <Route path="/invitedtalk" element={<InvitedTalk/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
