import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { FaUserCircle } from 'react-icons/fa';
import fundStyle from "../styles/FundPage.module.css"
import doner from "../Images/doner.png"
import DonationForm from './DonationForm';
import Navbarrr from '../Components/NavBar2';

const FundPage = () => {
  const { id } = useParams();
  const [fundDetails, setFundDetails] = useState({});
  const [showDonationForm, setShowDonationForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8080/funds/${id}`)
      .then((response) => response.json())
      .then((data) => setFundDetails(data))
      .catch((error) => console.error('Error fetching fund details:', error));
  }, [id]);

  const toggleDonationForm = () => {
    setShowDonationForm(!showDonationForm);
  };

  const closeDonationForm = () => {
    setShowDonationForm(false);
  };

  return (
    <>
      <Navbarrr />
        <div className={fundStyle["container4"]}>
          <div className={fundStyle["block1"]}>
          <p className={fundStyle["heading"]}>{fundDetails.Type}</p>
          {fundDetails.image && (
            <img className={fundStyle["img"]} src={fundDetails.image} alt="Fund" />
          )}
          </div>
         <div>
         <div className={fundStyle["block2"]}>
          <p className={fundStyle["mny"]}>Fund goal: ₹{fundDetails.amount}</p>
          <p className={fundStyle["fTyp"]}>Fund Type: {fundDetails.fundType}</p>
          <button id={fundStyle["btn"]} onClick={toggleDonationForm}>Donate Now</button>
          <p className={fundStyle["h2"]}>DonateForChange protects your donation</p>
          <p className={fundStyle["pG"]}>We guarantee you a full refund for up to a year in the rare event that fraud occurs.</p>
          <img className={fundStyle["doner"]} src={doner} alt="" />
          </div>
          <div className={fundStyle["random"]}>
          <hr className={fundStyle["hr"]}/>
          <div className={fundStyle["userFlex"]}>
          <FaUserCircle className={fundStyle["lg"]}/>
          <h3><span className={fundStyle["span"]}>{fundDetails.username}</span> is organising this fundraiser from <span className={fundStyle["span"]}>{fundDetails.state},{fundDetails.country}</span>.</h3>
          </div>
          </div>
         </div>
        </div>
        {showDonationForm && (
        <div className={fundStyle["customModal"]}>
          <div className={fundStyle["customModalContent"]}>
            <span className={fundStyle["customClose"]} onClick={toggleDonationForm}>&times;</span>
            {/* Include your donation form JSX here */}
            <h2 className={fundStyle["customHeading"]}>Donate Now</h2>
            <DonationForm onClose={closeDonationForm}/>
            {/* Add form elements */}
          </div>
        </div>
      )}
    </>
  );
};

export default FundPage;
