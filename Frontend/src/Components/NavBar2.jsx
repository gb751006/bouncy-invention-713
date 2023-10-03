import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../Images/modlogo.png";
import LogoutButton from "../Components/LogOut";
import {
  Box,
  Flex,
  Button,
  Center,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Menu,
  MenuButton,
  MenuList,
  List,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";

function Navbarrr() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  console.log(name);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // 12345@Aa
  const [isToken, settoken] = useState(localStorage.getItem("token") || "");

  const handleLogout = () => {
    localStorage.removeItem("token");
    settoken("");
  };
  useEffect(() => {
    fetch("http://localhost:8080/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setName(data.username))
      .catch((error) => console.error("Error fetching funds:", error));

    setTimeout(() => {
      settoken(localStorage.getItem("token") || "");
    }, 2000);
  }, [isToken]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleAuthToggle = () => {
    setIsLoggedIn(!isLoggedIn); // Toggle the isLoggedIn state
  };

  return (
    <Box
      bg={isSticky ? "#eef3ead8" : "#dee3da54"}
      py={3}
      px={4}
      w={isSticky ? "100%" : "100%"}
      // paddingLeft={isSticky ? "15%" : 0}
      // marginTop={isSticky ? 0 : "1%"}
      position={isSticky ? "sticky" : "fixed"}
      top={0}
      zIndex={9999}
      // marginLeft={isSticky ? 0 : "10%"}
      height="11vh"
      borderRadius={isSticky ? 0 : "50"}
    >
      <Center>
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <IconButton
              icon={<FaBars />}
              variant="outline"
              onClick={toggleDrawer}
              display={{ base: "block", md: "none" }}
            />
            <Button
              leftIcon={<FaSearch />}
              variant="outline"
              display={{ base: "none", md: "block" }}
            >
              Search
            </Button>
            <Button
              ml={3}
              variant="outline"
              display={{ base: "none", md: "block" }}
            >
              <Link to={"/sidebar/donations"}> For Donations</Link>
            </Button>
          </Flex>
          <Box>
            {/* Your logo goes here */}

            <Link to={"/"}>
              <Center>
                <img src={logo} alt="Logo" width="40%" />
              </Center>
            </Link>
          </Box>
          <Flex align="center">
            {name ? <FaUserCircle /> : null}

            <Text fontWeight={"bold"}>{name}</Text>

            {isToken ? (
              <LogoutButton handleLogout={handleLogout} />
            ) : (
              <Button
                ml={3}
                variant="outline"
                colorScheme="teal"
                display={{ base: "none", md: "block" }}
              >
                <Link to={"/login"}>SignIn</Link>
              </Button>
            )}

            <Button
              ml={3}
              colorScheme="teal"
              display={{ base: "none", md: "block" }}
            >
              <Link to={"/donationform"}> Start a GoFund</Link>
            </Button>
          </Flex>
        </Flex>
      </Center>
      {/* Drawer for mobile view */}
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody bg="green.500">
            <Menu>
              <List marginTop="50%">
                <MenuItem onClick={toggleDrawer}>Search</MenuItem>
                <MenuItem onClick={toggleDrawer}>For Charities</MenuItem>
                <MenuItem onClick={toggleDrawer}>How it works</MenuItem>
                <MenuItem onClick={toggleDrawer}>Sign In</MenuItem>
                <MenuItem onClick={toggleDrawer}>Start a GoFund</MenuItem>
              </List>
            </Menu>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbarrr;
