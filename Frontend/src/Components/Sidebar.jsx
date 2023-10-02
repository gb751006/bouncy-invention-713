import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaCommentAlt,
  FaDonate,
  FaMoneyCheck,
} from "react-icons/fa";
import sidebarStyle from "../styles/Sidebar.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/sidebar/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/sidebar/donations",
      name: "Donations",
      icon: <FaDonate />,
    },
    {
      path: "/sidebar/updates",
      name: "Updates",
      icon: <FaCommentAlt />,
    },
    {
      path: "/sidebar/transfers",
      name: "Transfers",
      icon: <FaMoneyCheck />,
    },
  ];
  return (
    <>
    <Navbar/>
    <div className={sidebarStyle.container22}>
      <div
        style={{ width: isOpen ? "200px" : "40px" }}
        className={sidebarStyle["sidebar"]}
      >
        <div className={sidebarStyle["top_section"]}>
          <div className={sidebarStyle["bars"]}>
            <FaBars style={{ paddingBottom: "10px" }} onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={sidebarStyle["link"]}
            activeClassName={sidebarStyle["active"]}
          >
            <div className={sidebarStyle["icon"]}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={sidebarStyle["link_text"]}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <div>
       <Outlet/>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
