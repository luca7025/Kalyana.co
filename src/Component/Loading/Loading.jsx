import React from "react";
import styles from "../Loading/LoadingPage.module.css";

const Loading = () => {
  return (
    <div className={styles.flyIn}>
      {/* Line 1 */}
      <div className={styles.text1}>
        <span>Not Just</span> a Wedding
      </div>

      {/* Line 2 */}
      <div className={styles.text2}>
        It’s a <span>Kalyana Company</span> Production
      </div>

      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src="/favicon.png" alt="Logo" className={styles.logo} />
      </div>
    </div>
  );
};

export default Loading;
