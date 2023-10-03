import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import donationStyle from '../styles/Donations.module.css';
import { FaUserCircle } from "react-icons/fa";

const Donations = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch('https://donateforchangeapi.onrender.com/funds')
      .then((response) => response.json())
      .then((data) => setFunds(data))
      .catch((error) => console.error('Error fetching funds:', error));
  }, []);

  return (
    <div className={donationStyle['fund']}>
      <h1 className={donationStyle.title}>Donations</h1>
      <div className={donationStyle['fund-cards']}>
        {funds.map((fund) => (
          <div key={fund._id} className={donationStyle['fund-card']}>
            <div className={donationStyle['funds']}>
            {fund.image && <img src={fund.image} alt="Fund" />}
            </div>
            <div className={donationStyle['funds']}>
            <div className={donationStyle["username"]}>
                <FaUserCircle className={donationStyle["lg"]} />
                <h3 className={donationStyle["h3"]}>{fund.username}</h3>
              </div>
            <p className={donationStyle["info"]}>Fund for: {fund.Type}</p>
            <p className={donationStyle["info"]}>Fund goal: {fund.amount}</p>
            <p className={donationStyle["info"]}>Fund Type: {fund.fundType}</p>
            <p className={donationStyle["info"]}>Country: {fund.country}</p>
            <Link className={donationStyle["btn"]} to={`/fundpage/${fund._id}`}>
              <button>View</button>
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donations;
