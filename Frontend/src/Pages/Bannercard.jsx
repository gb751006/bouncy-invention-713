import React from "react";
import styles from "../styles/bannercard.module.css";
import yourself from "../Images/start-yourself@2x.png";
import family from "../Images/start-friends-Family@2x.png";
import charity from "../Images/start-charity@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Bannercard = () => {
  return (
    <div className={styles.CBMain}>
      <div>
        <p>Make your Impact</p>
        <h2>Fundraise For ....</h2>
      </div>
      <div className={styles.yr}>
        Yourself
        <img className={styles.img} width={"100%"} src={yourself} alt="" />
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className={styles.fm}>
        Family
        <img className={styles.img} width={"100%"} src={family} alt="" />
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className={styles.ch}>
        Charity
        <img className={styles.img} width={"100%"} src={charity} alt="" />
        <div className={styles.arrow}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Bannercard;
