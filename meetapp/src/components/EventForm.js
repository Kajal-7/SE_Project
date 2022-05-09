import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

export default function Register() {
  

 
   

  return (
    <div>
    <div class="container mt-5 mb-5" >
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card px-5 py-5">
            <h5 class="mt-3" style={{ textAlign: "center", fontSize: "30px" }}>
              Create Conference
            </h5>
            <small class="mt-2 text-muted">
            </small>
            

            <div class="form-input">
              
              <input
                type="text"
                class="form-control"
                placeholder="Conference name"
                
              />
            </div>
            <div class="form-input">
              
              <input
                type="text"
                class="form-control"
                placeholder="Speaker"
              />
            </div>
            <div class="form-input">
              
              <input
                type="date"
                class="form-control"
              />
            </div>
            <div class="form-input">
              
              <input
                type="time"
                class="form-control"
                placeholder="Start Time"
              />
            </div>
            <div class="form-input">              
              <input
                type="time"
                class="form-control"
                placeholder="End Time"
              />
            </div>
            <div class="form-input">
              
              <input
                type="text"
                class="form-control"
                placeholder="About"
                rows="6"
              />
            </div>
           
            <button class="btn btn-primary mt-4 signup" style={{background:
                    "linear-gradient(90deg, #7B5BC7 0.52%, #EA388D 92.19%)",border: "none"}}>
              Create Conference
            </button>

            <div class="text-center mt-4">
              {" "}
              <span>Already a member?</span> <Link to={"/login"}>Login</Link>
            </div>
            <div class="text-center mt-4">
              {" "}
              <Link to={"/"}>Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
