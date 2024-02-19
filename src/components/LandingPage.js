// src/components/LandingPage.js

import React, { useState } from 'react';
import {
  Box,
  Image,
  Input,
  Button,
  VStack,
  Text,
  HStack,
  Flex
} from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import bgimage from '../assets/background.png';

function LandingPage() {
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the email submission logic
  };

  return (
    <Flex direction="column" h="100vh" overflow="hidden">
      <VStack
        spacing={1} // Adjust the spacing as needed
        align="center"
        justify="flex-start" // Aligns children to the top of the container
       
        pt="3vh" // Add padding-top to push content down a little from the top
      >
        <Image src={logo} alt="My Vegan Diet Logo" h="40px" mb={5} /> {/* Removed the Box wrapper */}
        <VStack spacing={1}>
          <Text fontSize="4xl" color="#353535">Are you ready to go</Text> {/* Reduced margin-bottom */}
          <Text fontSize="4xl" color="#6BCE2D" mb={1} fontWeight={700}>VEGAN?</Text> {/* Reduced margin-bottom */}
        </VStack>

        <HStack spacing={0}>
          <Input
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="md"
            borderColor="#6BCE2D" // Use Chakra's color system
            _hover={{ borderColor: "#6BCE2D" }} // Darken the border on hover
            _focus={{ borderColor: "#6BCE2D", boxShadow: "0 0 0 1px #6BCE2D" }} // Darken the border on focus and add a green box-shadow
          />
          <Button colorScheme="green" _hover={{ bgColor: "#58a925" }} bgColor="#6BCE2D" size="md" onClick={handleSubmit}>Start now</Button>
        </HStack>

        <VStack spacing={3}>
          <Text fontSize="2xl" color="gray.400">Sign-up for a 7-day vegan meal plan</Text> {/* Reduced margin-bottom */}
          <Text fontSize="2xl" color="gray.400" mb={2} fontWeight={700}>ABSOLUTELY FOR FREE</Text> {/* Reduced margin-bottom */}
        </VStack>


      </VStack>
      <Box
  flexGrow={1}
  bgImage={`url(${bgimage})`} // Corrected to use the imported image variable
  bgPos="center"
  bgRepeat="no-repeat"
  bgSize="contain"
  width="full"
/>

    </Flex>
  );
}

export default LandingPage;
