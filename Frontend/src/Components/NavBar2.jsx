import React, { useState, useEffect } from "react";
import logo from "../Images/DonateForChange_logo-removebg-preview.png";
import LogoutButton from "../Components/LogOut"
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
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
let isToken=localStorage.getItem('token')
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
      bg="pink.100"
      py={3}
      px={4}
      w={isSticky ? "100%" : "80%"}
      marginTop={isSticky ? 0 : "5"}
      position={isSticky ? "sticky" : "static"}
      top={0}
      zIndex={1000}
      marginLeft="auto"
      marginRight="auto"
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
              For Charities
            </Button>
          </Flex>
          <Box>
            {/* Your logo goes here */}
            <Center>
              <img src={logo} alt="Logo" width="10%" />
            </Center>
          </Box>
          <Flex align="center">
            <Button variant="outline" display={{ base: "none", md: "block" }}>
              How it works
            </Button>
            {isToken?( <LogoutButton/>):<Button ml={3} variant="outline"   display={{ base: "none", md: "block" }}>Sign In</Button>}
              
            <Button
              ml={3}
              colorScheme="teal"
              display={{ base: "none", md: "block" }}
            >
              Start a GoFund
            </Button>
          </Flex>
        </Flex>
      </Center>
      {/* Drawer for mobile view */}
      <Drawer placement="right" onClose={toggleDrawer} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Menu>
              <List>
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

export default Navbar;