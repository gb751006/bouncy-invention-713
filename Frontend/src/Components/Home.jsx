import styled from "styled-components";
import Navbar from "../Components/NavBar2";
import banner from "../Images/18733161_Business team climbing giant handshake with support of leader.jpg";
import Footer from "./Footer";
import logo from "../Images/DonateForChange_logo-removebg-preview.png";
import Homeguide from "../Pages/Homeguide";
import Assure from "../Pages/Assures";
import Bannercard from "../Pages/Bannercard";
import Details from "../Pages/Details";
import Bottom from "../Pages/Bottom";

const Home = () => {
  return (
    <DIV>
      <Navbar />
      <section className="hero">
        <div className="content">
          <h1>Donate For Change.</h1>
          <p>Your Little Help can do Miracle</p>
          <a href="/donationform" >👉Start Now </a>
        </div>
      </section>
      <div className="banner">
        <Homeguide />
      </div>

      {/********************* * start-section ***************/}
      <Assure />
      <Bannercard />
      <Details />
      <Bottom />
      {/********************* * section-end ***************/}

      {/* <Footer /> */}
      {/* <Footer /> */}
    </DIV>
  );
};

export default Home;

const DIV = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Pathway+Gothic+One&display=swap");
  background-color: #f8f8f8;
  .banner img {
    width: 100%;
  }
  .collectSection {
    padding: 100px 0;
  }

  .newHead {
    width: 90%;
    margin: 0 auto;
    padding: 10px 0px 25px 10px;
  }

  .newHead-Capt {
    font-family: "Pathway Gothic One", sans-serif;
    font-size: 34px;
    font-weight: 600;
    color: #0a0a0a;
    margin: 0;
  }

  .newHead-desc {
    font-family: Arial, sans-serif;
    margin: 6px 0;
    color: #6a6a6a;
  }

  .categorySec {
    padding: 50px 0;
    background-color: #fff;
  }
  .catMainSec {
    width: 90%;
    margin: 0 auto;
    display: flex;
  }

  .catText {
    width: 50%;
  }

  .catImg {
    width: 50%;
  }
  .catImg img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  .allcat ul {
    list-style-type: none;
  }

  .allcat ul li {
    list-style-type: none;
    padding: 15px 5px;
    font-size: 19px;
  }
  .allcat ul li a {
    text-decoration: none;
    color: #4e4e4e;
    font-weight: 500;
  }

  /************** * about ***********************/
  .about {
    padding: 50px;
    background-color: #fff;
  }
  .abtMSec {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .abtText {
    text-align: justify;
    padding-top: 60px;
    width: 50%;
  }
  .abtp {
    font-size: 18px;
    color: #282828;
  }
  .abtImg {
    width: 50%;
  }
  /********************* meeting  **********/
  .arrange {
    background-color: #fff;
    padding: 30px;
  }

  .arrangeSec {
    background-color: #fff;
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: space-around;
  }
  .arrimg {
    width: 50%;
  }

  .arrimg img {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    .catMainSec,
    .abtMSec,
    .arrangeSec {
      display: flex;
      flex-direction: column;
    }

    .newCollection {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .abtImg img {
      width: 100%;
    }
    .giftdesc {
      display: none;
    }
    .newCollection div {
      width: 100%;
    }
    .collectSection {
      padding: 70px 0;
    }

    .newHead-Capt {
      font-family: "Pathway Gothic One", sans-serif;
      font-size: 23px;
      font-weight: 600;
      color: #0a0a0a;
      margin: 0;
    }

    .abtText {
      padding-top: 30px;
      width: 100%;
    }
    .abtp {
      font-size: 14px;
    }
    .abtImg {
      width: 100%;
    }
    .arrimg {
      width: 100%;
    }
    .catImg {
      width: 100%;
    }
  }
  @media screen (min-width: 480px)and (max-width: 930px) {
    .catMainSec,
    .abtMSec,
    .arrangeSec {
      display: flex;
      flex-direction: column;
    }

    .newCollection {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .abtImg img {
      width: 100%;
    }
    .giftdesc {
      display: none;
    }
    .newCollection div {
      width: 100%;
    }
    .collectSection {
      padding: 70px 0;
    }

    .newHead-Capt {
      font-family: "Pathway Gothic One", sans-serif;
      font-size: 23px;
      font-weight: 600;
      color: #0a0a0a;
      margin: 0;
    }

    .abtText {
      padding-top: 30px;
      width: 100%;
    }
    .abtp {
      font-size: 14px;
    }
    .abtImg {
      width: 100%;
    }
    .arrimg {
      width: 100%;
    }
    .catImg {
      width: 100%;
    }
  }
`;
