import React from "react";
import bgvideo from "../../assets/video/bg1.mp4";
import hstyle from "./Home.module.css";
import Card from "./Price";
import ReviewSection from "../Review/ReviewSection";

const Home = () => {
  return (
    <>
      <div className={hstyle.videoContainer}>
        <video src={bgvideo} autoPlay loop muted />
      </div>
      <div className={hstyle.quote}>
        <h1>One day.A lifetime of memories</h1>
        <p>We turn your special moments into visual poetry.</p>
        <div className={hstyle.buttonmain}>
          <button className={hstyle.bottone1}>
            <strong>We’re Ready to Capture You</strong>
          </button>
        </div>
      </div>
      <div>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          className={hstyle.marqueeStyle}
        >
          ✨ Booking Open for 2025 Weddings 💍 | 🎥 Cinematic Pre-Weddings | 📸
          Drone & Candid Photography | ❤️ Love. Frame. Forever.
        </marquee>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <ReviewSection/>
      </div>
    </>
  );
};

export default Home;
