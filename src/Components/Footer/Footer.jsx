import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="f-container innerWidth paddings flexCenter">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make the people live in their dream home <br />
            with no financial stress
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Ankara, Gölbaşi</span>

          <dis className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About</span>
          </dis>
        </div>
      </div>
    </section>
  );
}

export default Footer;
