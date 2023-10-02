import React from "react";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <Center ml={20} py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: "100%", md: "540px" }}
          height={{ sm: "476px", md: "20rem" }}
          direction={{ base: "column", md: "row" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALEAAAB4CAMAAACKEOOLAAABIFBMVEUZa4T7u4wAAADogDR/o7EAZH//t5/rgjX9wJPneyr/v4////8rZ3zDl3TPcS1yRip3hYcAaIa6oIkAABkYZXz/u6A8KyMAFS3vgS5zcXAAAyEAAB34soHqh0Hvl1oLLjntkVHyoGgRSlsOPEn1qHMJJzATUWQAHjZ8fX0VXXO9n5bjr5yfkZHPp5kAYYn/0QD/ugD/tA5dam8TExMeHh4nJycwMDA5OTlCREVRUVFeXl4FFhwDDhG1x88AWnebsbuMjIyysrJrlabi4uJFa3/xwrNZeIj/7uj54NicnJz/18usmJL/wa1qgItZg3OtrVGyskj/xn3/yVP/3AP9s1ThwywccH2DhpD6ykI/d3nwyhx5kWuQm2JbOib7hCWOc1y6Dq/iAAAEhUlEQVR4nO2bDXPaRhCGT5alyOA2Phe1pj0JCQQ1iM82TWqHECelpA3Bbus6btKv//8vuivAtc0djfGYW0/vmTGCk9A82nm1d2Cbba6Trza+fvTN4ydPvj04ODw8LBb3M252DuasD17ZkFG72VnYGilLhcvrVLgZdanwU91aagpPZcL9um4vNX15iHVrqalKhUu6tdSU5CEu6PZSIm8ThDOhEK7o9lIi72uEG5tCuE83xPI2QXiyUwhXdXspkS9/CDc2hTDdxlZTCJOd7FTCZBtbQSG8QXXFJl9gbhCe7FTCZEMsX68BVBubqq+RbWyqNkE2E0phqo2tLv9Ydx8zQbaxqYpMd8XG2PaBzJhqYwOcZ/niojDdVTwbPM/n80fXhak2NsDZzCMvrgoT/mTHWH7Ki0f3obEhzsuZ8neP70NjA5zh93Pli5bR1y21DD7yXffVzHl/Jkx1FY/wUeoCP8yUf6Te2Jiz47sZr+f3H83JzuGjCePc4XzszpmF+WWtT6+x8VEz9X0/bTRhe2HsvsEwbw5YgVpj45OWj7hu9nCZV/lna/2F1ocxAl+3NR6PW+4CrecD3XoSJn56hEEeSowbFIWZ4zDOnFHDXxR2mwQzkeEwqa/rT3SbKeBH6TXh2R3oj3SrKVjwHTvn2bznkwwF3275rp9O0qy0WXFTGHUa+ITijYeTMvi2Mch+wxm0ZllwmvCkyXXrLcKbIDxmfIjCLRjAUg9xD6qfa7aTAMJQYM44+jVgYJhiKHi7vY1Phrr9JEzS8TbcXuezCrMRThvt45OfsNYtgqGAj81oxbGgmd4E0tE66XS7eB8ekTTOwBSPsk7mQK5/7vS6HeH6O3SFIcUXbYGP/V+6vdNO79ezt3qtljGZZwLh5791e53TbvfsnU6npQwgxZcWEO2TLqSi1zvTZ/Qf8IkP0/Kl18fvu71er/N7W5/TcqAnp1cG2sfvTzudP8gK41rzWlPg7bfv2nQbhRR+z3wNBoPBYDBoY/tW6DB+qOLPT/9FeZCO7wQ+vhXF9QvzB7dhr7j+pSh/YN8CY2yMjfH/xnhvb2tl9v7SYMz4xFuZXS3fZPCdnLUiuV0tX2UYY2O8xDgBhNJOtku3cbwVhlEgc04Sy4sSesYisDwvCeAJWovpxsKHMJ5ucUTM9hMxtizPFnEQBkLYYRjEcAFhADuiWNjCCqMosBLYYQtKxoGwLU8EXiTwEaoexpgIeJ0E8CKES/Li0CNkbGMuLNuKIBZgDMlO0DgXiTiERAdwSVZCxhjm3Tiy5jXGgUB4IRp7WOPIw+rCBVExDqFXBHD3hVEcJJBjC7IbxHEQ4YiwIysIY1skW3EumQVZt3EioB9D8TyR4E+CTcGDNixwl8DB6RiMJDSMb44xNsbG2BgbY2NsjI2xMV4bBaBeH+znVmZ3UK/X8TR3bVorV0oZVeTgo5X5OztBtVTFk1XKtTszh8rWarUyUEG+RD5DPs/4IuOTq0wHpwdkx+KbStn78URwPqj2XQnLrqHAnOkmy8oS8CiGf2VG7t+bDAbDB/EPGj60NiB8Ut8AAAAASUVORK5CYII="
              }
              alt="#"
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                we are together ,nitesh
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                Mai gareeb hu
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} fontSize={"l"}>
                  Donation Amount : Rs.57
                </Text>
              </Stack>
            </Stack>

            <Stack
              width={"100%"}
              mt={"2rem"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
              >
                Edit
              </Button>
              <Button
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                View
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </div>
  );
};
export default Dashboard;
