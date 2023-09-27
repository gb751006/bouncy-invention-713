

import { useState } from 'react'
import {
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
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
const Form1 = ({handleState}) => {
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

      <FormControl as={GridItem} colSpan={6}>
        {/* <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel> */}
        {/* <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        /> */}
      </FormControl>

      {/* <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl> */}

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
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Animal")}}
        >Animal</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Buisness")}}
        >Buisness</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Community")}}
        >Commuinty</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Creative")}}
        >Creative</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Education")}}
        >Education</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Family")}}
        >Family</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Events")}}
        >Events</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Faith")}}
        >Faith</Button>
        <Button m="5px" 
        onClick={(e)=>{handleState("Type","Other")}}
        >Other</Button>
        
        
      </FormControl>
    </>
  )
}
const Form2 = () => {
  
}
const Form3 = () => {
  
}

const Form4 = () => {
  
}
const Form5 = () => {
 
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [data,setData]=useState({})
  
  const handleState=(name,value)=>{
   
    setData((prevState) => {
      return {
        ...prevState,        
        [name]: value
      };
    }); 
  }
  console.log(data)
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 handleState={handleState} /> : step === 2 ? <Form2 />: step === 3 ? <Form3 />: step === 4 ? <Form4 /> : <Form5 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 20)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 5}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 5) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 20)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 5 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
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