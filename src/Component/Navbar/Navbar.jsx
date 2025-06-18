import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/">MyLogo</Link>
        </div>

        <nav className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/aboutus" onClick={closeMenu}>About</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={menuOpen ? styles.bar1Active : styles.bar}></span>
          <span className={menuOpen ? styles.bar2Active : styles.bar}></span>
          <span className={menuOpen ? styles.bar3Active : styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
