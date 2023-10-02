import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Image,
  VStack,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  UnorderedList,
  ListItem,
  useToast,
  RadioGroup,
  HStack,
  Radio,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const SignupPage = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    age: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      userData.username.trim() === "" ||
      userData.email.trim() === "" ||
      userData.password.trim() === "" ||
      userData.age.trim() === "" ||
      userData.gender.trim() === ""
    ) {
      toast({
        title: "Error",
        description: "Please fill all input fields.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // if (userData.password !== userData.confirmPassword) {
    //   toast({
    //     title: "Error",
    //     description: "Password and Confirm Password do not match.",
    //     status: "error",
    //     position: "top",
    //     duration: 4000,
    //     isClosable: true,
    //   });
    //   return;
    // }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      toast({
        title: "Error",
        description:
          "Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // Send a POST request to your server with the user data
    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration successful
        toast({
          title: "Success",
          description: "Registration successful!",
          status: "success",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
        // You can redirect the user to a login page or perform any other action here
        setTimeout(()=>{
navigate("/login")
        },3000)
      } else {
        // Handle server errors
        toast({
          title: "Error",
          description: "Registration failed.",
          status: "error",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
      }
    } catch (error) {
      // Handle network errors
      toast({
        title: "Error",
        description: "Network error.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      minHeight="100vh"
      bg="#fbf8f6"
      direction={{ base: "column", md: "row" }}
    >
      {/* Left side */}
      <Box
        flex={{ base: "none", md: 1 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#fbf8f6"
        color="black"
        p={{ base: 8, md: 16 }}
      >
        <VStack spacing={10} alignItems="center">
          <Image src="/DonateForChange.png" alt="Logo" maxW="150px" />
          <Heading as="p" size="sm" marginTop={5}>
            Welcome to DonateForChange!
          </Heading>
          <Heading as="h3" size="lg">
            Create an Account
          </Heading>
        </VStack>
      </Box>

      {/* Right side (Signup Form) */}
      <Box
        flex={{ base: "none", md: 2 }}
        p={8}
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="white"
        position="relative"
        borderTopLeftRadius={{ base: 0, md: "100px" }}
      >
        <Text
          position="absolute"
          top="20px"
          right="20px"
          fontSize="sm"
          color="blue.500"
          cursor="pointer"
          onClick={() => {
            // Handle the Sign In link click action here
          }}
        >
          Already Have an Account? Sign In
        </Text>

        <Box width="100%" maxW="400px">
          <Heading as="h4" size="md" mb={4}>
            Create your account
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Input
                type="text"
                placeholder="User Name"
                size="lg"
                variant="flushed"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
              <Input
                type="email"
                placeholder="Email"
                size="lg"
                variant="flushed"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
              <Input
                type="number"
                placeholder="Age"
                size="lg"
                variant="flushed"
                name="age"
                value={userData.age}
                onChange={handleChange}
              />
              <RadioGroup
                value={userData.gender}
                onChange={(value) =>
                  setUserData({ ...userData, gender: value })
                }
                name="gender"
                mt={4}
              >
                <Text fontSize="md" color="gray.500" textAlign="left">
                  Select your gender:
                </Text>
                <HStack spacing={4}>
                  <Radio value="male">Male</Radio>
                  <Radio value="female">Female</Radio>
                  <Radio value="other">Other</Radio>
                </HStack>
              </RadioGroup>

              <InputGroup size="lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="flushed"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <InputRightElement>
                  <IconButton
                    icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                    variant="ghost"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide Password" : "Show Password"
                    }
                  />
                </InputRightElement>
              </InputGroup>
              <Box
                bg="gray.100"
                p="4"
                borderRadius="md"
                w="300px" // Set the box width and height to make it square
                h="150px"
              >
                <Text fontSize="md" color="gray.500" textAlign="left">
                  Your password must have:
                </Text>
                <UnorderedList listStyleType="disc">
                  <ListItem fontSize="sm" color="gray.500" textAlign="left">
                    At least 8 characters
                  </ListItem>
                  <ListItem fontSize="sm" color="gray.500" textAlign="left">
                    1 uppercase letter
                  </ListItem>
                  <ListItem fontSize="sm" color="gray.500" textAlign="left">
                    1 lowercase letter
                  </ListItem>
                  <ListItem fontSize="sm" color="gray.500" textAlign="left">
                    1 number
                  </ListItem>
                  <ListItem fontSize="sm" color="gray.500" textAlign="left">
                    1 symbol
                  </ListItem>
                </UnorderedList>
              </Box>
              <Button type="submit" colorScheme="blue" size="lg" width="100%">
                Sign Up
              </Button>
            </VStack>
          </form>
        </Box>
        <Text
          alignSelf="flex-end"
          position="absolute"
          bottom="10px"
          right="10px"
          fontSize="sm"
          color="gray.500"
          textAlign="right"
        >
          By signing up, you agree to the DonateForChange terms of service and
          privacy notice.
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupPage;
