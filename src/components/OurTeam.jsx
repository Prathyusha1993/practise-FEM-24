import React from "react";

const OurTeam = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Meet our team</h2>
      <p>
        Our team consists of experienced architects who develop the projects{" "}
        <br /> starting with a sketch and following it up to complete
        implementation
        <br /> of intended ideas.
      </p>
      <h3>Leadership</h3>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div>
          <img
            style={{ width: "230px", height: "250px" }}
            src="/images/team1image.jpg"
          />
          <h6 style={{ marginTop: "10px" }}>KEVIN BRYAN</h6>
          <p>Interior Designer - Partner</p>
        </div>
        <div>
          <img
            style={{ width: "230px", height: "250px", marginLeft: "20px" }}
            src="/images/team5image.jpg"
          />
          <h6 style={{ marginTop: "10px" }}>TOBY SCOTT</h6>
          <p>Architect Director - Partner</p>
        </div>
        <div>
          <img
            style={{ width: "230px", height: "250px", marginLeft: "20px" }}
            src="/images/team4image.avif"
          />
          <h6 style={{ marginTop: "10px" }}>MURIEL MOORE</h6>
          <p>Architect Mananger - Partner</p>
        </div>
        <div>
          <img
            style={{ width: "230px", height: "250px", marginLeft: "20px" }}
            src="/images/team6image.jpg"
          />
          <h6 style={{ marginTop: "10px" }}>POK BENJAMIN</h6>
          <p>Interior Manager - Partner</p>
        </div>
      </div>
      <h3 style={{ marginTop: "30px" }}>Collaborators</h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ marginTop: "10px" }}>
          <p>STAFF</p>
          <h6 style={{ fontSize: "14px" }}>Ryan Long</h6>
          <h6 style={{ fontSize: "14px" }}>Joseph Harper</h6>
          <h6 style={{ fontSize: "14px" }}>Marlon Huff</h6>
          <h6 style={{ fontSize: "14px" }}>Kara Torres</h6>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "20px" }}>
          <p>ARCHITECTURAL</p>
          <h6 style={{ fontSize: "14px" }}>Teresia Poston</h6>
          <h6 style={{ fontSize: "14px" }}>Yolonda Wills</h6>
          <h6 style={{ fontSize: "14px" }}>Zack Hurt</h6>
          <h6 style={{ fontSize: "14px" }}>Heather Gonzalez</h6>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "20px" }}>
          <p>Marketing</p>
          <h6 style={{ fontSize: "14px" }}>Gerald Perry</h6>
          <h6 style={{ fontSize: "14px" }}>Ronald Barnes</h6>
          <h6 style={{ fontSize: "14px" }}>Nicholas Morgan</h6>
          <h6 style={{ fontSize: "14px" }}>Jerry Powell, Marketing</h6>
        </div>
        <div style={{ marginTop: "10px", marginLeft: "20px" }}>
          <p>OPERATIONS</p>
          <h6 style={{ fontSize: "14px" }}>Emily Long, Business</h6>
          <h6 style={{ fontSize: "14px" }}>Louise Perez</h6>
          <h6 style={{ fontSize: "14px" }}>Ryan Butler</h6>
          <h6 style={{ fontSize: "14px" }}>Jeffrey Henderson</h6>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
