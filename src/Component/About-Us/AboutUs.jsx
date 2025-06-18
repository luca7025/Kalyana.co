import React from "react";
import aboutstyle from "./AboutUs.module.css";
import video from "../../assets/Video/aboutus.mp4";

const AboutUs = () => {
  return (
    <>
      <div className={aboutstyle.videoContainer}>
        <video className={aboutstyle.avideo} src={video} autoPlay loop muted />
        <h2 className={aboutstyle.us}>ABOUT US</h2>
      </div>
      <div className={aboutstyle.para}>
        <p>
          Step into the enchanting world of Wedding Bells, where love stories
          are woven into timeless tapestries through the art of wedding
          photography. Our journey began with an extraordinary moment at
          Thrissur Pooram, where destiny brought together two kindred spirits,
          Aswin and Sreenath N. Unnikrishnan. In that magical encounter, a spark
          was ignited, and Wedding Bells was born. From humble beginnings, it
          didn’t take us long to become the best wedding photography company in
          Kerala.
        </p>
        <p>
          At Wedding Bells, our belief in the essence of genuine connections and
          authentic emotions is at the very heart of our craft. Our mantra is
          elegantly simple, yet it carries profound significance: "Real ties,
          real feelings, and magical pictures''. Our Destination wedding
          photographer takes immense joy in forging personal bonds with our
          cherished clients, immersing ourselves in their unique love stories
          and dreams for their special day.
        </p>
        <p>
          Within the realm of intimate weddings, we discover an intimate oasis
          that stirs our souls. These close-knit celebrations cradle the true
          essence of love, and we set out to unveil the precious gems of genuine
          connections tucked within. With an artist's touch and a playful
          spirit, we elevate the ordinary into extraordinary keepsakes with our
          Wedding photography.
        </p>
        <p>
          Our artistry extends beyond intimate affairs, as we've had the
          privilege of capturing unforgettable moments at celebrity weddings.
          From star-studded celebrations to cherished private affairs, our lens
          weaves captivating narratives that resonate with joy, love, and the
          magic of each couple's story.
        </p>
      
      </div>
<div className={aboutstyle.blogSection}>
  <h1>Behind Every Beautiful Shot</h1>
<div className={aboutstyle.cardGrid}>
  {[
    {
      img: "../../../public/Team/team1.jpg",
      role: "Candid Photographer",
      name: "Arun Kumar",
      desc: "Focuses on natural moments like smiles,reactions,emotions.Works mostly with a zoom lens and fast shutter to capture moments as they happen."
    },
    {
      img: "../../../public/Team/team2.jpg",
      role: "Lead Photographer",
      name: "Rahul Menon",
      desc: " Handles key couple shots, rituals, and main moments, Directs the team and coordinates the flow of the shoot."
      
    },
    {
      img: "../../../public/Team/team3.jpg",
      role: "Traditional Photographer",
      name: "Sneha Varghese",
      desc: "Covers group photos, family pictures, stage photos.Guides people for poses and ensures everyone is included."
    }
  ].map((item, index) => (
    <a
      key={index}
      href="#"
      className={aboutstyle.blogCard}
      onClick={(e) => e.preventDefault()}
    >
      <img alt="Background" src={item.img} />
      <div className={aboutstyle.blogCardContent}>
        <p className={aboutstyle.blogMeta}>{item.role}</p>
        <p className={aboutstyle.blogTitle}>{item.name}</p>
        <div className={aboutstyle.blogDescription}>
          <p>{item.desc}</p>
        </div>
      </div>
    </a>
  ))}
</div>
</div>
    </>
  );
};

export default AboutUs;
