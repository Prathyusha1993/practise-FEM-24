import React from "react";
import NavbarComp from "./NavbarCompo";

function MainPage() {
  return (
    <div>
      <NavbarComp />
      <h1>Make </h1>
      <h1>remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals and watch productivity soar.
      </p>
      <button>Learn more</button>
      <div>
        <img src="/images/image-hero-desktop.png" alt="" />
      </div>
    </div>
  );
}

export default MainPage;
