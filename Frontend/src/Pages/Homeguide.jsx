import React from "react";
import "../styles/Homeguide.css";

const Homeguide = () => {
  return (
    <div className="guideMain">
      <div>
        <h1>
          Donate for Change is at your fingertip <br /> take just a few minutes to explore and help 
        </h1>
      </div>
      <div className="steps">
        <div>
          <div className="num">
            <div>Step 1</div>
          </div>
          <div>
            <div className="hedG">Start with the basics</div>
            <p>Kick things off with your name and location.</p>
          </div>
        </div>
        <div>
          <div className="num">
            <div>Step 2</div>
          </div>
          <div>
            <div className="hedG">Tell your story</div>
            <p>We'll guide you with tips along the way.</p>
          </div>
        </div>
        <div>
          <div className="num">
            <div>Step 3</div>
          </div>
          <div>
            <div className="hedG">Share with friends and family</div>
            <p>People out there want to help you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homeguide;
