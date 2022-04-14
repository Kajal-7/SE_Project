import React from "react";
import "../styles/PrivateMeet.css";
import Navbar from "../components/Navbar/Navbar";
import pic1 from "../assets/startPic.png";
import { FooterContainer } from "../containers/footer";

function PrivateMeet() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Navbar />
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={pic1}
              class="d-block mx-lg-auto img-fluid"
              alt="Sample"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Sample Heading</h1>
            <p class="lead" style={{ marginLeft: "0px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Create
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterContainer/>
    </div>
  );
}

export default PrivateMeet;
