import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authentication } from "./data/auth"; //Provider
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import Faq from "./pages/FAQ";
import PrivateMeet from "./pages/PrivateMeet";
import KeynoteSession from "./pages/KeynoteSession";
import InvitedTalk from "./pages/InvitedTalk";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import MeetDisplay from "./pages/MeetDisplay";
import Research from "./pages/Research";
import Poster from "./pages/Poster";
import FAQ from "./pages/FAQ";

function App() {
    return (
      <div>
      <navbar/>
    <div className = "App" >
        <Authentication child={
        <Router> 
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={ <Dashboard />}/>
          <Route path="/faq" element={ <Faq />}/>
          <Route path="/PrivateMeet" element={ <PrivateMeet />}/>
          <Route path="/keynotesession" element={<KeynoteSession  />}/>
          <Route path="/invitedtalk" element={ <InvitedTalk/>} /> 
          <Route path="/research-presentation" element={<Research/>}/> 
          <Route path="/poster-presentation" element={<Poster/>}/>   
          <Route path="/meet-display" element={<MeetDisplay/>}/> 
          <Route path="/Faq"  element = {<FAQ/>} /> 
        </Routes>
      </Router>
      }/>
      </div>
      </div> 
    );
}

export default App;