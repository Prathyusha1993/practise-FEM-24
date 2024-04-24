import React from "react";
import NavbarComp from "./NavbarCompo";
import "../styles/Mainpage.css";

function MainPage() {
  return (
    <div>
      <NavbarComp />
      <div>
        <h1>Make </h1>
        <h1>remote work</h1>
        <p className="main-para">
          Get your team in sync, no matter your location.
          <br />
          Streamline processes,create team rituals and <br />
          watch productivity soar.
        </p>
        <button className="main-button">Learn more</button>
      </div>
      <div>
        <img
          className="main-image"
          src="/images/image-hero-desktop.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default MainPage;
