import React, { useEffect, useState } from 'react'
import { FormControl, FormHelperText, FormLabel, Input, InputGroup, InputRightElement, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom';
const Dashboard = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [funds, setFunds] = useState([]);
const[editfund,setEditFund]=useState(0)
const handleedit=(id)=>{
  console.log(id)
  fetch(`http://localhost:8080/funds/update/${id}`,{
    method:"PATCH",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({amount:editfund})
})
.then(res=>res.json())

.catch(err=>console.log(err))
}
  useEffect(() => {
    fetch('http://localhost:8080/funds/private',{
      method:"GET",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
      .then((response) => response.json())
      .then((data) => setFunds(data))
      .catch((error) => console.error('Error fetching funds:', error));
  }, []);

  return (
   <div style={{marginTop:"100px"}}>
     {funds?.map((fund)=>(
      <Center  ml={"30%"} py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '640px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        
        
        boxShadow={'2xl'}
        padding={4}>
        <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              fund.image
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
          pt={2}>
           <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             we are together 
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {fund.Type} Activity For {fund.fundType}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={500} fontSize={'l'}>
              Donation Amount : {fund.amount}
            </Text>
            
          </Stack>
          </Stack>
          
         
          

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
            onClick={onOpen}
            bgColor={"#43A047"}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>Edit
              
              <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit this Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
         New Amount
        </FormLabel>
        <InputGroup size="md">
          <Input
          onChange={(e)=>{setEditFund(e.target.value)}}
            pr="4.5rem"
            type= 'number'
            placeholder="Your initial target"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              INR
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormHelperText>Bear in mind that transaction fees, including credit and debit charges, are deducted from each donation.</FormHelperText>
      </FormControl>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
          <Button bgColor={"#43A047"} colorScheme='blue' mr={3} onClick={()=>handleedit(fund._id)}
            
            >
          Save
            </Button>
            <Button bgColor={"#43A047"} colorScheme='blue' mr={3} onClick={onClose}
            
            >
           Close
            </Button>
           
          </ModalFooter>
        </ModalContent>
      </Modal>
            </Button>
         
            <Link  to={`/fundpage/${fund._id}`}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              bgColor={"#43A047"}
              _focus={{
                bg: 'blue.500',
              }}>
             View
            </Button>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Center>
     )
      
     )}
   
   </div>
  )
        }
        export default Dashboard