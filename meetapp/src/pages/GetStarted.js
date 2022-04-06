import "../styles/Carousel.css";
import React from "react";
import "../styles/GetStarted.css";
import { Link } from "react-router-dom";

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
          <button
            type="button"
            class="btn btn-outline-primary btn-lg gs-btns"
            style={{ marginRight: "100px" }}
          >
            Contact
          </button>
          <button type="button" class="btn btn-outline-primary btn-lg gs-btns">
            Help
          </button>
        </div>
        <div className="p2">
          <h1 style={{ color: "#f7e681" }}>About Us</h1>
          <h4>
          MeetApp is a meeting for researchers to present, discuss, identify 
          important problems and formulate future research direction on specific themes.
           It provides a true learning environment :)
          </h4>
        </div>
        <Link to={"/login"}>
          <button
            type="button"
            class="btn btn-primary btn-lg flow-btns"
            style={{
              marginRight: "20px",
              borderColor: "#24a0ed",
              marginLeft: "150px",
            }}
          >
            Login
          </button>
        </Link>
        <Link to={"/register"}>
          <button
            type="button"
            class="btn btn-outline-primary btn-lg flow-btns"
            style={{ marginLeft: "20px" }}
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
      <div className="mid-part">
        <br></br>
        <br></br>
        <br></br>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading" style={{ marginTop: "50px" }}>
              Explore. <span class="text-muted">It'll blow your mind.</span>
            </h2>
            <p class="lead">
              Here you can:
              <br></br>
              <i className="fa-solid fa-comment-dots"></i> Allows users to chat
              <br></br>
              Fixed number of seats
              <br></br>
              Allows users to talk
              <br></br>
              Allows users to share video
            </p>
          </div>
          <div class="col-md-5">
            {/* <img
              class="featurette-image img-fluid mx-auto image"
              //src={feature1}
              alt="Generic placeholder"
            ></img> */}
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2
              class="featurette-heading"
              style={{ marginLeft: "0px", marginTop: "30px" }}
            >
              What you do of that surplus?{" "}
              <span class="text-muted">Something.</span>
            </h2>
            <p class="lead" style={{ marginLeft: "0px" }}>
              Reduce wastage and provide usable items that you don't need
              anymore to the needy.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            {/* <img
              class="featurette-image img-fluid mx-auto image"
             // src={feature2}
              alt="Generic placeholder"
            ></img> */}
          </div>
        </div>

        <hr class="featurette-divider"></hr>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              School is fun! <span class="text-muted">How?</span>
            </h2>
            <p class="lead">
              School children must be highly encouraged to do volunteering as it
              develops team building and teamwork. The kindness and enthusiasm
              these kids have is just so much that even a part of it is enough
              for this.
            </p>
          </div>
          <div class="col-md-5">
            {/* <img
              class="featurette-image img-fluid mx-auto image"
              //src={feature3}
              alt="Generic placeholder"
            ></img> */}
          </div>
        </div>
        <footer class="py-5" id="footer">
            <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Sahyog</p></div>
        </footer>

        {/* <hr class="featurette-divider"></hr> */}
      </div>
      {/* <div className="bot-part"></div> */}
    </div>
  );
          }

export default GetStarted;