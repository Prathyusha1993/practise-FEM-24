import React from "react";
import NavbarComp from "./NavbarCompo";
import "../styles/Mainpage.css";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      {/* <NavbarComp /> */}
      {/* <button
        style={{
          // display: "flex",
          // marginTop: "20px",
          border: "1px solid black",
          borderRadius: "5px",
          background: "none",
          // float: "right",
          marginBottom: "30px",
          position: "absolute",
          right: "10px",
          top: "62px",
        }}
        onClick={handleLogout}
        variant="outline-success"
      >
        Logout
      </button> */}
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
