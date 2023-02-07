import { SimpleGrid } from '@chakra-ui/react';
import React from 'react'
import VetCard from './Cards/VetCard';

export default function ShowVets({vets}) {
 
    return (
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
    );
  }

