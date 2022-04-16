
import React from "react";
import "../styles/GetStarted.css";
import { Link } from "react-router-dom";
import getstarted from "../assets/startPic.png";
import chatImg from "../assets/chat.png";
import seatImg from "../assets/seat.png";
import micImg from "../assets/mic.png";
import camImg from "../assets/cam.png";
import { FooterContainer } from "../containers/footer";


function GetStarted() {
  return (
    <div >
      
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
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 p2">
            <div style={{ marginLeft: "100px", marginTop: "25px" }}>
              <h1 style={{ color: "#f7e681" }}>About Us</h1>
              <h4>Struggling with low event engagement. </h4>
              <h4>We can fix that!</h4>
              <h5 style={{color: "gray"}}>Use this platform to engage participants and encourage networking at your conferences.</h5>
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
          <div className="col-lg-6 col-md-12 col-sm-12 "  style={{display: "flex", justifyContent: "center"}}>
            <img src={getstarted} alt="get started image" id="Img"></img>
          </div>
        </div>
      <div style={{backgroundColor: "white", paddingBottom: "20px"}}>
                <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12 "  style={{display: "flex", justifyContent: "center"}}>
            <img src={getstarted} alt="dashboard image" id="Img"></img>
          </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 " id="features" style={{display: "flex", justifyContent: "center"}}>
                  <div style={{paddingTop: "60px"}}>
                  <img src={chatImg} alt="chatimage" style={{marginRight: "10px"}}></img>
                  <span style={{fontWeight: "bold",color: "black"}}>Allows users to chat</span>
                  <br /><br /><br />
                  <img src={seatImg} alt="seatimage" style={{marginRight: "10px"}}></img>
                  <span style={{fontWeight: "bold",color: "black"}}>Fixed number of seats</span>
                  <br /><br /><br />
                  <img src={micImg} alt="micimage" style={{marginRight: "10px"}}></img>
                  <span style={{fontWeight: "bold",color: "black"}}>Allows users to talk</span>
                  <br /><br /><br />
                  <img src={camImg} alt="camimage" style={{marginRight: "10px"}}></img>
                  <span style={{fontWeight: "bold",color: "black"}}>Allows users to share video</span>
                  </div>
                  </div>
                </div>
      </div>
      <FooterContainer />
    </div>
  );
}

export default GetStarted;
