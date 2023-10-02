import React from "react";
import styles from "../styles/Homeguide.module.css";

const Homeguide = () => {
  return (
    <div className={styles.guideMain}>
      <div>
        <h1>
          Donate for Change is at your fingertip <br /> take just a few minutes
          to explore and help
        </h1>
      </div>
      <div className={styles.steps}>
        <div>
          <div>
            <div>Step 1</div>
            <div className={styles.hedG}>Start with the basics</div>
            <p>Kick things off with your name and location.</p>
          </div>
        </div>
        <div>
          <div>
            <div>Step 2</div>
            <div className={styles.hedG}>Tell your story</div>
            <p>We'll guide you with tips along the way.</p>
          </div>
        </div>
        <div>
          <div>
            <div>Step 3</div>
            <div className={styles.hedG}>Share with friends and family</div>
            <p>People out there want to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeguide;
