import React, { useState } from "react";
import fundStyle from "../styles/FundPage.module.css";

const DonationForm = ({ onClose, onDonate }) => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");

  const handleDonate = () => {
    console.log("Donation Data:", {
      amount: donationAmount,
      name: donorName,
      cardNumber,
      expirationDate,
      cvv,
    });
  };

  return (
    <div className={fundStyle.modal}>
      <div className={fundStyle.modalContent}>
        <span className={fundStyle.close} onClick={onClose}>
          &times;
        </span>
        <h2 className={fundStyle.h2}>Donate Now</h2>
        <label className={fundStyle.label} htmlFor="donationAmount">Donation Amount:</label>
        <input className={fundStyle.input}
          type="number"
          id="donationAmount"
          value={donationAmount}
          onChange={(e) => setDonationAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <label className={fundStyle.label} htmlFor="donorName">Your Name:</label>
        <input className={fundStyle.input}
          type="text"
          id="donorName"
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          placeholder="Enter your name"
        />
        <button className={fundStyle.bbtn} onClick={handleDonate}>Pay Now</button>
      </div>
    </div>
  );
};

export default DonationForm;
