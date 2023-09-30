import React from "react";
import "../styles/bottom.css";
import { Link } from "react-router-dom";
import flower from "../Images/footer-flower-cta@2x.png";

const Bottom = () => {
  return (
    <div>
      <div className="bottom">
        <div className="btm">
          <h1>Ready to get started? Join thousands of others today.</h1>
          <Link to={"/signup"}>
            <button>Start a DonateforChange</button>
          </Link>
          <Link>
            <button>How it Works</button>
          </Link>
        </div>
        <div className="img">
          <img src={flower} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
