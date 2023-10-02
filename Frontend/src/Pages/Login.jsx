import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react'
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
} from '@chakra-ui/react'


export default function LoginPage() {
  const navigate=useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
const payload={email,password}
   
    const handleSubmit=()=>{
      fetch("http://localhost:8080/users/login",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>
      localStorage.setItem("token",res.token),
      navigate("/")
      )
    .catch(err=>console.log(err))
    }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
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
          
            <Button onClick={()=>handleSubmit()} colorScheme={'blue'} variant={'solid'}>
              Sign in
            </Button>
          </Stack>
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