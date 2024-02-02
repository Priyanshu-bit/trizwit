import React from "react";
import "./styles.css";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Navbar />
      <div className="main-content">
        <div className="main">LAUNCH YOUR MVP</div>
        <div className="main">WITHIN 3 MONTHS</div>
        <div className="description">
          Work with a long-term tech partner that will help you build an MVP to
          gain traction from early adopters and raise money from investors.
        </div>

        <button
          className="button"
          style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
        >
          See Pricing{" "}
          <img src="right-arrow.png" style={{ width: "10%" }} alt="--->" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
