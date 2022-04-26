import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Authentication } from "./data/auth"; //Provider
import GetStarted from "./pages/GetStarted";
import Dashboard from "./pages/Dashboard";
import PrivateMeet from "./pages/PrivateMeet";
import KeynoteSession from "./pages/KeynoteSession";
import InvitedTalk from "./pages/InvitedTalk";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import MeetDisplay from "./pages/MeetDisplay";
import Research from "./pages/Research";
import Poster from "./pages/Poster";
import Faq from "./pages/FAQ";
import PrivateRoute from "./PrivateRoutes";

function App() {
    return (
      
    <div className = "App" >
        <Authentication child={
        <Router> 
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={ <PrivateRoute child={<Dashboard />}></PrivateRoute>}/>
          <Route path="/faq" element={ <PrivateRoute child={<Faq />}></PrivateRoute>}/>
          <Route path="/PrivateMeet" element={<PrivateRoute child={<PrivateMeet/>}></PrivateRoute>}/>
          <Route path="/keynotesession" element={<PrivateRoute child={<KeynoteSession  />}></PrivateRoute>}/>
          <Route path="/invitedtalk" element={ <PrivateRoute child={<InvitedTalk/>}></PrivateRoute>} /> 
          <Route path="/research-presentation" element={<PrivateRoute child={<Research/>}></PrivateRoute>}/> 
          <Route path="/poster-presentation" element={<PrivateRoute child={<Poster/>}></PrivateRoute>}/>   
          <Route path="/meet-display" element={<PrivateRoute child={<MeetDisplay/>}></PrivateRoute>}/> 
        </Routes>
      </Router>
      }/>
      </div>
    );
}

export default App;