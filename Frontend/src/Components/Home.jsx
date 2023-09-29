import styled from "styled-components";
import Navbar from "../Components/Navbar";
import banner from "../Images/18733161_Business team climbing giant handshake with support of leader.jpg";
import Footer from "./Footer";
import logo from "../Images/DonateForChange_logo-removebg-preview.png";
import Homeguide from "../Pages/Homeguide"
import Assure from "../Pages/Assures";
import Bannercard from "../Pages/Bannercard";


const Home = () => {
  return (
    <DIV>
      <Navbar />
      <section className="hero">
        <div className="content">
          <h1>Donate For Change.</h1>
          <p>Your Little Help can do Miracle</p>
          <a href="#Home">👉Start Now </a>
        </div>
      </section>
      <div className="banner">
        {/* <section className="hero1">
          
          <div className="content">
            <h1>Donate For Change</h1>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <a href="#">
              <img src={logo} />
              Click Here
            </a>
          </div>
        </section> */}
          <Homeguide/>
        {/* <img src={banner} alt="" /> */}
      </div>

      {/************************   section-start  ********************* */}
      {/* <div className="giftSec"> */}
      {/* <img src={gift} alt="" /> */}

      {/* <div className="gifttext"> */}
      {/* <p className="giftCapt">Lorem</p>
          <p className="giftdesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            error similique aperiam magni ex modi!
          </p>

          <p className="shoText" style={{ color: "#dfdfdf" }}>
            LOREM &nbsp;&nbsp; L O R E M
          </p> */}
      {/* </div> */}
      {/* </div> */}
    
      {/************************  about-section-start  ********************* */}
     
      {/* <div className="about">
        <div className="abtMSec">
          <div className="abtText">
            <div className="abthead">
              <p className="newHead-Capt">About</p>
              <p className="newHead-desc">Donate for Chhange</p>
            </div>

            <div className="abtp">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                beatae saepe porro distinctio quod voluptates repellat harum
                accusamus laboriosam explicabo.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                nobis rerum cum quia, doloremque quod quo aliquid maiores
                molestiae, quae sapiente laudantium tempore?
              </p>
            </div>

            <p className="abtp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium quasi animi ipsum optio nostrum ab commodi pariatur
              minima laborum dignissimos impedit reiciendis veniam quo, sit vero
              sapiente sunt molestiae eos.
            </p>
          </div> */}
          {/* <div className="abtImg"><img src={abtImg} alt="" /></div> */}
        {/* </div> */}
      {/* </div> */}

      {/************************  about-section-end  ********************* */}

      {/********************* * start-section ***************/}
     <Assure/>
     <Bannercard/>
      <div className="arrange">
        <div className="arrangeSec">
          <div className="arrimg">{/* <img src={meetImg} alt="" /> */}</div>
          <div className="arrText">
            <div className="abthead">
              <p className="newHead-Capt">dsfdsf dsfds</p>
              <p className="newHead-Capt">sdfsdf sdafsdf</p>

              <p className="newHead-desc">fdgfds g gdsfg f dfg fd g gfds gf</p>
              <br />
              <br />
              <br />
              <p className="shoText" style={{ color: "#2d2c2c" }}>
                L E A R N &nbsp;&nbsp; M O R E
              </p>
            </div>
          </div>
        </div>
      </div>
      {/********************* * section-end ***************/}

      {/* <Footer /> */}
      <Footer />
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

  /* .hero1{
    display:flex;
    height:100vh;
    background-image:url("../Images/18733739_Hands holding team of tiny business persons.jpg")
    background-size:cover;
  }
  /* .content{ */
  /* display:flex;
  flex-direction:column;
  max-width:1200px;
  margin:0 auto;
  justify-content:center;
  align-items:center;
  text-align:center;
  color:black; */
  /* } */
  */ .newHead {
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

  @media screen and (min-device-width: 310px) and (max-device-width: 480px) {
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
