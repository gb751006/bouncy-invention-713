import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Toast,
  useToast,
} from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Navbarrr from '../Components/NavBar2'


export default function LoginPage() {
  const toast=useToast()
  const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const payload={email,password}
  //  hdjkfhgjk
    const handleSubmit=()=>{
      fetch("https://donateforchangeapi.onrender.com/users/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((res)=>{
      localStorage.setItem("token",res.token)
    
    } )
    .catch(err=>console.log(err))

    const token=localStorage.getItem("token")

    if(token==undefined){
      toast({
        title: "failed",
        description: "Login Failed!",
        status: "error",
        position: "top",
        duration: 4000,
        isClosable: true,
      });
       
    }else{
   

        setTimeout(() => {
          navigate("/")
        }, 3000);
  
        toast({
          title: "Success",
          description: "Login successful!",
          status: "success",
          position: "top",
          duration: 4000,
          isClosable: true,
        });
    }





     
   
    }
  return (
    <Stack 
    
    minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Navbarrr/>
      <Flex
           mt={"30px"}
           
      p={8} flex={1} align={'center'} justify={'center'}>
        <Stack 
        p={10}
        boxShadow={"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}
        spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
          </FormControl>
          {/* <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl> */}
          <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
             
                <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          <Stack spacing={6}>
          
            <Button bgColor={"#43A047"} onClick={()=>handleSubmit()} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
          <FormLabel>Don't have an account?</FormLabel>
          <Button
              rounded={'full'}
              w={"80px"}
              bgColor={"#43A047"}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
                
                <Link style={{textDecoration:"none"}} to="/register">Signup</Link>
            </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ2lufGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60'
          }
        />
      </Flex>
    </Stack>
  )
}