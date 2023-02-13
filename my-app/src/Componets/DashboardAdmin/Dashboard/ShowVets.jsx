import { SimpleGrid, Stack, Text, useBreakpointValue, Box } from '@chakra-ui/react';
import React from 'react'
import VetCard from './Cards/VetCard';

export default function ShowVets({vets}) {
 
    return (
      <Stack spacing="25px"><Box bg={"#bae8e8"} maxW="7xl" mx={"auto"} pt={2} px={{ base: 2, sm: 12, md: 17 }} borderRadius="20px"
      color={"blackAlpha.700"}
      fontWeight={700}
      alignItems={"center"}
      lineHeight={1.0}
      fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
      textAlign={"center"}
      justifyContent={"center"}>Veterinarias afiliadas
      </Box>
      
      <SimpleGrid columns={[1, 1,2, 3]} spacing='55px' >
       { vets.map((vet) => (
         <VetCard
         id={vet.id}
         name={vet.name}
         phone={vet.phone}
         email={vet.email}
         address={vet.address}
         ></VetCard>
         ))}
        </SimpleGrid>
         </Stack>
    );
  }

