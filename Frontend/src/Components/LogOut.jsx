import React from 'react';

function LogoutButton() {
  const handleLogout = () => {
    // Perform any necessary frontend cleanup (e.g., clearing local storage)
    localStorage.removeItem('token'); // Remove the token from local storage

    // Make an API call to log the user out on the server
    fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the token
      }
    })
      .then(response => {
        if (response.ok) {
          // Successful logout, redirect or update UI as needed
          window.location.reload(); // For example, you can refresh the page
        } else {
          // Handle logout failure (e.g., show an error message)
          console.error('Logout failed');
        }
      })
      .catch(error => {
        // Handle network or other errors
        console.error('Network error during logout', error);
      });
  };

  return (
    <button onClick={handleLogout} ml={3}
    colorScheme="red" // Use a different color for logout
    display={{ base: "none", md: "block" }} >Logout</button>
  );
}

export default LogoutButton;
