import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuthContext } from "../../data/auth";
import "./navbar.css";
const Navbar = () => {

  const {logout}=useAuthContext();
  const [error,setError]=useState("");
  const navigate = useNavigate();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
    } catch (error) {
      console.log("Error logout" + error.message);
      setError("Failed to logout");
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
         
          <span className="fmargin">MeetApp</span>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="col">
              <Link to="/dashboard" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem">
                  Conference
                </li>
              </Link>
              <Link to="/PrivateMeet" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem">
                  Private Meet
                </li>
              </Link>

              <Link to="/faq" style={{ textDecoration: "none" }}>
                <li class="nav-item" className="navitem" id="lastitem">
                  FAQs
                </li>
              </Link>
              <li><button class="myb" onClick={handleLogout}><i class="fa fa-sign-out" aria-hidden="true"></i></button></li>              
              {error && <div>{error.message}</div>}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
