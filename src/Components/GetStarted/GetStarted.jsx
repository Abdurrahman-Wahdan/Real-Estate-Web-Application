import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="g-container innerWidth paddings">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Homyz</span>
          <span className="secondaryText">
            Scbscribe and find the best prices in the market
            <br />
            Find your residencies soon
          </span>
          <button className="button">
            <a href="mailto:abdelrahman.wahdan01@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
