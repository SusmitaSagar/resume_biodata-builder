import React from "react";

import images from "../../assets/images.jpg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span> Biodata</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own Biodata. 
        </p>
      </div>
      <div className={styles.right}>
        <img src={images} alt="Biodata" />
      </div>
    </div>
  );
}

export default Header;
