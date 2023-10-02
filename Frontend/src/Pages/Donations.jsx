import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import donationStyle from '../styles/Donations.module.css';

const Donations = () => {
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/funds')
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
            {fund.image && <img src={"https://lssparle.org.in/wp-content/uploads/2021/10/hub_12_18_charity-Hero-1200x900-1.jpg"} alt="Fund" />}
            </div>
            <div className={donationStyle['funds']}>
            <h3>{fund.username}</h3>
            <p className={donationStyle["info"]}>Info: {fund.Type}</p>
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
