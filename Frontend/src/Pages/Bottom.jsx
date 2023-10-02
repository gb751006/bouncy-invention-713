import React from "react";
import styles from "../styles/bottom.module.css";
import { Link } from "react-router-dom";
import flower from "../Images/footer-flower-cta@2x.png";

const Bottom = () => {
  return (
    <div>
      <div className={styles.bottom}>
        <div className={styles.btm}>
          <h1>Ready to get started? Join thousands of others today.</h1>
          <Link to={"/signup"}>
            <button>Start a DonateforChange</button>
          </Link>
          <Link>
            <button>How it Works</button>
          </Link>
        </div>
        <div className={styles.img}>
          <img src={flower} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
