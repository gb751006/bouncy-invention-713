import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
//comment
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast({
        title: "Error",
        description: "Please fill in both email and password.",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Login successful, extract the token from the response
        const data = await response.json();
        const token = data.token; //

        // Store the token securely (localStorage)
        localStorage.setItem("token", token);

        toast({
          title: "Success",
          description: "Login successful!",
          status: "success",
          position: "top",
          duration: 4000,
          isClosable: true,
        });

        // You can redirect the user to their dashboard or perform any other action here
      } else {
        // Handle login errors
        toast({
          title: "Error",
          description: "Login failed. Please check your credentials.",
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
        description: "Network error. Please try again later.",
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
      direction={{ base: "column", md: "row" }}
      bg="#fbf8f6"
    >
      {/* Left side */}
      <Box
        flex={{ base: "none", md: 1 }}
        display="flex"
        justifyContent="left"
        bg="#fbf8f6"
        color="black"
        p={{ base: 8, md: 16 }}
      >
        <VStack spacing={0} alignItems="left">
          <Image src="/DonateForChange.png" alt="Logo" maxW="200px" />
          <Heading as="h2" size="sm" marginTop={5}>
            Welcome back!
          </Heading>
          <Heading as="h3" size="lg">
            Sign In to DonateForChange
          </Heading>
        </VStack>
      </Box>

      {/* Right side (Login Form) */}
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
            // Handle the Sign Up link click action here
          }}
        >
          Don't Have an Account? Sign Up
        </Text>

        <Box width="100%" maxW="400px">
          <Heading as="h4" size="md" mb={4}>
            Your account details
          </Heading>
          <form onSubmit={handleLogin}>
            <VStack spacing={4}>
              <Input
                type="email"
                placeholder="Email"
                size="lg"
                variant="flushed"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputGroup size="lg">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  variant="flushed"
                  name="password"
                  value={formData.password}
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
              <Button type="submit" colorScheme="blue" size="lg" width="100%">
                Sign In
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
          By continuing, you agree to the DonateForChange terms of service and
          privacy notice.
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginPage;
