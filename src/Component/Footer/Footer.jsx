import React from "react";
import footerStyle from "./Footer.module.css";
import logo from "../../assets/Image/brand.png";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <>
    
      
    
      <footer>
        <div  className={footerStyle.menu} >
      <p>Usefull Links</p>
      <Link className={footerStyle.linkmenu}>HOME</Link><br />
      <Link className={footerStyle.linkmenu}>ABOUT US</Link><br />
      <Link className={footerStyle.linkmenu}>GALLERY</Link><br />
      <Link className={footerStyle.linkmenu}>CONTACT</Link>
      </div>
        <div className={footerStyle.logo}>
          <img src={logo} alt="" className={footerStyle.logoImg} />
        </div>
        <div className={footerStyle.icons}>
          <p>Follow us on</p>
          <FaInstagram className={footerStyle.insta} />
          <FaWhatsapp className={footerStyle.whatsapp} />
          <MdOutlineMail className={footerStyle.gmail} />
          <FaYoutube className={footerStyle.youtube} />
        </div>
      </footer>
      <div className={footerStyle.copyright}>
        copyright 2025 all rights reserved by Kalyna Company
      </div>
    </>
  );
};

export default Footer;
