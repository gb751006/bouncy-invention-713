import React, { useState } from "react";
import logo from "../Images/DonateForChange_logo-removebg-preview.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/layout";
import "./Navbar.css";
import { ChakraProvider, Input } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    
    <DIV>
      {/* //  */}
      <nav className={colorChange ? "navbar colorChange" : "navbar"}>
        <header className="header">
          <nav>
            <ul className="menu-items">
              <li>
                For Individuals
                <div className="mega-menu">
                  <div className="content">
                    <div className="col">
                      <section>
                        <h2 className="item-1-heading">C A T E G O R I E S</h2>
                        <ul className="mega-links">
                          <li>
                            <Link>Lorem</Link>
                          </li>
                          <li>
                            <Link>Lorem</Link>
                          </li>
                          <li>
                            <Link>Lorem</Link>
                          </li>
                          <li>
                            <Link>Lorem</Link>
                          </li>
                          <li>
                            <Link>Lorem</Link>
                          </li>
                          <li>
                            <Link>Lorem</Link>
                          </li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </li>
              <Input placeholder="🔍Search for fundraiser" width="21%" />
              <li>
                <img src={logo} />
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/register"}>Sign Up</Link>
              </li>

              {/* <Box className="Login">
                <Box>Login</Box>
              </Box> */}
            </ul>
          </nav>
        </header>

        {/* </ul> */}
      </nav>
    </DIV>
  );
};

export default Navbar;

const DIV = styled.section`
  
   li > img { 
    margin-right:0px;
    /* border:1px solid yellow; */
    width: 40%;
    /* margin:auto; */
  } 
  .mega-links{
    display:flex;
    /* border:1px solid red; */
  }
  .mobile-logo {
    width: 60%;
  }
  .menu-items{
    /* border:1px solid blue; */
    /* display:flex */
    align-items:center;
    justify-content:space-evenly;
  }
  .navbar {
    /* display: flex; */
    /* justify-content: space-evenly; */
    align-items: center;
    padding: 20px;
    width: 100%;
    /* border:1px solid red; */
    position: fixed;
    z-index:9999;
  }
  .colorChange {
    background-color: #fff;
    color: #2e2d2d;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  .colorChange a {
    color: #2e2d2d !important;
  }

  .navbar__logo {
    font-weight: bold;
    font-size: 24px;
  }

  .navbar__mobile-toggle {
    width: 40%;
    font-size: 24px;
    cursor: pointer;
    display: none; /* Hide by default */
  }

  .navbar__menu {
    /* display: flex; */
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    justify-content: space-around;
  }

  .navbar__item {
    margin-left: 20px;
  }

  .navbar__item a {
    text-decoration: none;
    color: #f3f2f2;
  }

  .navbar__item a.active {
    border: 1px solid #8b80806b;
    padding: 4px 7px 4px 7px;
  }

  .mobile-menu-open {
    display: block;
    /* border: 2px solid red; */
  }

  .Login {
    display: none;
  }
  /* Initially hide the menu on larger screens */
  @media (max-width: 767px) {
    .menu-list.mobile-menu-open {
      display: block;
    }
  }

  @media (max-width: 768px) {
    .col_1 {
      display: none;
    }
    .Profile {
      display: none;
    }
    .Login {
      display: block;
    }
    .navbar {
      flex-direction: column;
      align-items: flex-start;
      /* bor
      der: 2px solid red; */
    }

    .navbar__menu {
      display: flex;
      flex-direction: column;
      background-color: #2a2929;
      padding: 10px;
      transition: transform 0.3s ease-in-out;
      /* transform: translateY(-50%); */
      opacity: 0;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      z-index: 1;
      color: #fff;
    }

    .navbar__menu.active {
      transform: translateY(0);
      opacity: 1;
    }

    .navbar__mobile-toggle {
      display: block;
    }
  }
  @media screen and (min-device-width: 310px) and (max-device-width: 480px) {
    .navbar__logo {
      display: none;
    }
    .navbar__item {
      margin-left: 20px;
      text-align: center;
      border-bottom: 1px solid #3c3a3a52;
      padding: 5px 0;
    }

    .mobileNav {
      width: 100%;
      display: flex;
      /* border: 2px solid red; */
    }
    .colorChange a {
      color: #ddd9d9 !important;
    }
  }
  @media screen and (min-device-width: 481px) and (max-device-width: 768px) {
    .navbar__logo {
      display: none;
    }
    .navbar__item {
      margin-left: 20px;
      text-align: center;
      border-bottom: 1px solid #3c3a3a52;
      padding: 5px 0;
    }
    .mobileNav {
      width: 100%;
      display: flex;
    }
    .colorChange a {
      color: #ddd9d9 !important;
    }
  }
  @media screen and (min-device-width: 769px) {
    .mobile-logo {
      display: none;
    }
  }
`;
