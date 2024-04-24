import React from "react";
import NavbarComp from "./NavbarCompo";
import "../styles/Mainpage.css";

function MainPage() {
  return (
    <div>
      <NavbarComp />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div>
          <p className="main-heading">
            Make <br />
            remote work
          </p>
          <p className="main-para">
            Get your team in sync, no matter your location.
            <br />
            Streamline processes,create team rituals and <br />
            watch productivity soar.
          </p>
          <button className="main-button">Learn more</button>
          <div className="main-images">
            <img src="/images/client-databiz.svg" alt="" />
            <img
              style={{ marginLeft: "30px" }}
              src="/images/client-audiophile.svg"
              alt=""
            />
            <img
              style={{ marginLeft: "30px" }}
              src="/images/client-meet.svg"
              alt=""
            />
            <img
              style={{ marginLeft: "30px" }}
              src="/images/client-maker.svg"
              alt=""
            />
          </div>
        </div>
        <div>
          <img
            className="main-image"
            src="/images/image-hero-desktop.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
