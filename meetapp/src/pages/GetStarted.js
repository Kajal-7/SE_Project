import "../styles/Carousel.css";
import React from "react";
import "../styles/GetStarted.css";
import { Link } from "react-router-dom";
import getstarted from "../assets/startPic.png";

import "../styles/Carousel.css";

function GetStarted() {
  return (
    <div>
      <div className="top-part">
       <div className="row">
       <div className="contact">
          <a href="mailto:skap.meet@gmail.com">
            <button
              type="button"
              class="btn btn-outline-primary btn-lg gs-btns"
              style={{
                marginRight: "100px",
                border: "none",
                background:
                  "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",
              }}
            >
              Contact
            </button>
          </a>
        </div>
       </div>
        <div className="row" >
        <div className="col-6 p2">
         <div style={{marginLeft:"100px"}}>
         <h1 style={{ color: "#f7e681" }}>About Us</h1>
          <h4>Struggling with low event engagement. </h4>
          <h4>We can fix that!</h4>
         </div>
          <Link to={"/login"}>
          <button
            type="button"
            class="btn btn-primary btn-lg flow-btns"
            style={{
              marginRight: "20px",
              background:
                "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",
              marginLeft: "100px",
              color: "white",
              border: "none",
            }}
          >
            Login
          </button>
        </Link>
         <Link to={"/register"}>
          <button
            type="button"
            class="btn btn-primary btn-lg flow-btns"
            style={{
              marginLeft: "20px",
              color: "white",
              border: "none",
              background:
                "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",
            }}
          >
            Register
          </button>
        </Link>
        </div>
        <div className="col-6">
        <img
          src={getstarted}
          alt="get started image"
        ></img>
        </div>
        </div>
        
        
       
       
      </div>

      <footer class="py-5" id="footer">
        <div class="container px-5">
          <p class="m-0 text-center text-white small">
            Copyright &copy; Skap
          </p>
        </div>
      </footer>

    </div>
  );
}

export default GetStarted;
