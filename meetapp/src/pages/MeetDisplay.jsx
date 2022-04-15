import React from "react";
import Navbar from "../components/Navbar/Navbar";
import getstarted from "../assets/startPic.png";
function MeetDisplay() {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div
          className="col-lg-8 col-md-12 col-sm-12"
          style={{ display: "flex", justifyContent: "center", padding: "0px" }}
        >
          <div
            className="card"
            style={{ backgroundColor: "white", marginTop: "30px" }}
          >
            <img src={getstarted} />
          </div>
        </div>
        <div
          className="col-lg-4 col-md-12 col-sm-12"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div className="card" style={{ width: "25rem", paddingTop:"0px",position:"fixed" }}>
          <div className="ms-auto" style={{width:"70px",  backgroundColor:"gray",
                border: "none", marginTop:"-20px",display:"flex", justifyContent:"center", borderRadius:"5px", fontWeight:"bold", marginBottom:"10px"}}>APR <br></br> 10<br></br>2022</div>
            <h2 style={{ marginLeft: "0px" }}>
              The social Innovation Startup Summit
            </h2>
            <p style={{ marginLeft: "0px" }}>Event By</p>
            <h6>TEAMCONNECTWORK'S COMMUNITY</h6>
            <hr></hr>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <span>Start Time</span> <h4>9:30am</h4>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <span>End Time</span> <h4>11:30am</h4>
              </div>
            </div>
            <span style={{ marginLeft: "0px" }}>Speaker</span>
            <h6>Kajal Kaushal</h6>
            <button
              class="btn btn-primary mt-4"
              style={{
                backgroundColor: "black",
                borderRadius: "30px 15px",
                border: "none",
                marginTop:"0px"
              }}
            >
              <span style={{ fontSize: "13px" }}>
                https://meet.google.com/njh-ikap-crt?authuser=0
              </span>{" "}
            </button>
            <button
              class="btn btn-primary mt-4 "
              style={{
                background:
                  "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",
                border: "none",
              }}
            >
             Reserve a Seat
            </button>
            <button
              class="btn btn-primary mt-4 "
              style={{
                background:
                  "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",
                border: "none",
              }}
            >
              Enter event
            </button>
          </div>
          
        </div>
      </div>
      <div className="col-lg-8" >
        <h2 style={{color: "#f7e681", marginTop:"15px"}}>About Event</h2>
        <p style={{color:"white"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."</p>
       
      </div>
    </div>
  );
}

export default MeetDisplay;
