import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Container,
  Stack,
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Text,
  Grid,
  Img,
  Image,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import Navbar from './Navbar'
import Navbarrr from './NavBar2'
const Form1 = ({handleState}) => {
  const[type,setType]=useState("")
  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Where are you located
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Country / Region
        </FormLabel>
        <Select
        onChange={(e)=>{handleState(e.target.name,e.target.value)}}
          id="country"
          name="country"
          autoComplete="country"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
          <option>India</option>
          <option>England</option>
        </Select>
      </FormControl>

     


      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
        onChange={(e)=>{handleState(e.target.name,e.target.value)}}
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
        
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
        onChange={(e)=>{handleState(e.target.name,e.target.value)}}
          type="number"
          name="pincode"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
        
        <Text>Why You Are Fundraising</Text>
        <Button m="5px" bg={type=="Animal"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Animal");setType("Animal")}}
        >Animal</Button>
        <Button m="5px" bg={type=="Buisness"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Buisness");setType("Buisness")}}
        >Buisness</Button>
        <Button m="5px" bg={type=="Community"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Community");setType("Community")}}
        >Commuinty</Button>
        <Button m="5px" bg={type=="Creative"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Creative");setType("Creative")}}
        >Creative</Button>
        <Button m="5px" bg={type=="Education"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Education");setType("Education")}}
        >Education</Button>
        <Button m="5px" bg={type=="Family"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Family");setType("Family")}}
        >Family</Button>
       
        <Button m="5px" bg={type=="Other"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("Type","Other");setType("Other")}}
        >Other</Button>
        
        
      </FormControl>
    </>
  )
}
const Form2 = ({handleState}) => {
  const[type,setType]=useState("")
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Who are You fundraising for
      </Heading>
      <FormControl as={Grid} >
       
        
        
     
        <Button m="5px" h={"100px"} bg={type=="youself"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("fundType","yourself");setType("youself")}}
        > 
      <Text fontSize='xl'  mr={"38%"}>Yourself </Text>
  <Image w={"30%"} h={"100%"} src='https://www.gofundme.com/_next/static/images/yourself-f0b50d399c2485c1698f82eba958108f.png' alt='Dan Abramov' />
        </Button>
        <Button m="5px" h={"100px"} bg={type=="others"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("fundType","others");setType("others")}}
        > 
      <Text fontSize='xl'  mr={"38%"}>Someone else </Text>
  <Image w={"30%"} h={"100%"} src='https://www.gofundme.com/_next/static/images/someone-else-5a430cd6767be30776f9dfd1b46be9ca.png' alt='Dan Abramov' />
        </Button>
        <Button m="5px" h={"100px"} bg={type=="charity"?"#4FFFB0":"#D0F0C0"}
        onClick={(e)=>{handleState("fundType","charity");setType("charity")}}
        > 
      <Text fontSize='xl'  mr={"38%"}>Charity </Text>
  <Image w={"30%"} h={"100%"} src='https://www.gofundme.com/_next/static/images/charity-9cb36cf97a1c6187e47608a680f09e05.png' alt='Dan Abramov' />
        </Button>
        
       
       
        
        
      </FormControl>
    </>
  )
  
}
const Form3 = ({handleState}) => {
  return (
    <>
     
      
     

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Amount
        </FormLabel>
        <InputGroup size="md">
          <Input
          onChange={(e)=>{handleState("amount",e.target.value)}}
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
    </>
  )
}

const Form4 = ({handleState}) => {
  return (
    <Box position={'relative'}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 15 }}
        // py={{ base: 10, sm: 20, lg: 32 }}
        >
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' }}>
            Celebrate their life with a photo{' '}
            <Text as={'span'} bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              Or
            </Text>{' '}
           video
          </Heading>
          <Stack direction={'row'} spacing={4} align={'center'}>
           
          </Stack>
        </Stack>
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          
          <Box as={'form'} mt={10}>
            {/* <img src="https://www.gofundme.com/_next/static/images/yourself-f0b50d399c2485c1698f82eba958108f.png" alt="" /> */}
          <label for="poster">drag or upload your photo here:</label>

<input type="file" name="poster" accept="image/png, image/jpeg"  />
            <Stack mt={"30px"} spacing={4}>
              <Input
              onChange={(e)=>{handleState("image",e.target.value)}}
                placeholder="Image Link"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
              />
            
            
              
            </Stack>
          
          </Box>
          form
        </Stack>
      </Container>

    </Box>
  )
}


export default function Multistep() {
  const navigate=useNavigate()
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(25)
  const [data,setData]=useState({})
  // 123asdzxc@A
  const handleState=(name,value)=>{
   
    setData((prevState) => {
      return {
        ...prevState,        
        [name]: value
      };
    }); 
  }
  const handlesumbit=()=>{
    fetch("https://donateforchangeapi.onrender.com/funds/add",{
      method:"POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body:JSON.stringify(data)
  })
  .then(res=>res.json())
  .then(res=>
    toast({
      title: 'Donation account created',
      description: "Donation account created",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:"top"
    }),
  setTimeout(() => {
    navigate("/sidebar/dashboard")
  }, 3000)
    )
  .catch(err=>console.log(err))
 

  }
  return (
    <>
    <Navbarrr  />
      <Box
     
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        pt={20}
        m="10px auto"
        mt="0px"
        
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%"  isAnimated></Progress>
        {step === 1 ? <Form1 handleState={handleState} /> : step === 2 ? <Form2 handleState={handleState} />: step === 3 ? <Form3 handleState={handleState} />:  <Form4 handleState={handleState} />  }
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 25)
                }}
                bgColor={"#43A047"}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
              bgColor={"#43A047"}
                w="7rem"
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 5) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 25)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 4 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                handlesumbit()
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}