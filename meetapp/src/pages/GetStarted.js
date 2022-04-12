import "../styles/Carousel.css";
import React from "react";
import "../styles/GetStarted.css";
import { Link } from "react-router-dom";
import { FooterContainer } from '../containers/footer'

// import together from "./assets/holding_hands.png";
// import feature1 from "./assets/feature1.png";
// import feature2 from "./assets/feature2.png";
// import feature3 from "./assets/feature3.png";
// import logo from "./assets/logo.png";
import "../styles/Carousel.css";

function GetStarted() {
  return (
    <div>
      <div className="top-part">
        <div className="p1">
          {/* <span> */}
          {/* <img
                //src={logo}
                alt="tgt "
                id="mylogo"
                style={{
                  height: "60px",
                  width: "90px",
                  
                  marginRight: "2rem",
                  marginLeft: "100px",
                  marginBottom: "0.5rem",
                }}
              ></img> */}
          {/* </span> */}
          <a href="mailto:skap.meet@gmail.com">
            <button
              type="button"
              class="btn btn-outline-primary btn-lg gs-btns"
              style={{ marginRight: "100px" }}
            >
              Contact
            </button>
          </a>

          <button type="button" class="btn btn-outline-primary btn-lg gs-btns">
            Help
          </button>
        </div>
        <div className="p2">
          <h1 style={{ color: "#f7e681" }}>About Us</h1>
          <h4>
            MeetApp is a meeting for researchers to present, discuss, identify
            important problems and formulate future research direction on
            specific themes. It provides a true learning environment :)
          </h4>
        </div>
        <Link to={"/login"}>
          <button
            type="button"
            class="btn btn-primary btn-lg flow-btns"
            style={{
              marginRight: "20px",
              borderColor: "#24a0ed",
              marginLeft: "100px",
              color: "white",
            }}
          >
            Login
          </button>
        </Link>
        <Link to={"/register"}>
          <button
            type="button"
            class="btn btn-outline-primary btn-lg flow-btns"
            style={{ marginLeft: "20px", color: "white" }}
          >
            Register
          </button>
        </Link>
        {/* <img
          //src={together}
          alt="tgt"
          style={{ width: "50%", marginTop: "10px", display: "block" }}
        ></img> */}
      </div>
      <FooterContainer />
      
    </div>
  );
}

export default GetStarted;
