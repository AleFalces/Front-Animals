import React from 'react'
import VetCard from './Cards/VetCard';

export default function ShowVets({vets}) {
 
    return (
        vets.map((vet) => (
          <VetCard
            id={vet.id}
            name={vet.name}
            phone={vet.phone}
            email={vet.email}
            address={vet.address}
          ></VetCard>
        ))
    );
  }

