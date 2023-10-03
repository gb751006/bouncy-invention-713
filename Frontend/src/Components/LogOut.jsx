import { Button } from '@chakra-ui/react';
import React from 'react';

function LogoutButton({handleLogout}) {
  // const handleLogout = () => {
  //   console.log("hiii")
  //   // Perform any necessary frontend cleanup (e.g., clearing local storage)
  //   localStorage.removeItem('token'); // Remove the token from local storage

   
  // };

  return (
    <Button onClick={handleLogout} ml={3}
    colorScheme="teal" // Use a different color for logout
     >Logout</Button>
  );
}

export default LogoutButton;
