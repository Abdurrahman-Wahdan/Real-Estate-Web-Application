import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container flexCenter paddings innerWidth">
        {/* left section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find all the properties that will love and it will suit you
            </span>
            <span className="secondaryText">
              Froget something called proplems finding Property
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premuiem Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2500} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winnings</span>
            </div>
          </div>
        </div>

        {/* right section */}
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: "0px", opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flexCenter hero-right"
        >
          <div className="image-container">
            <img src="/hero-image.png" alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default hero;
