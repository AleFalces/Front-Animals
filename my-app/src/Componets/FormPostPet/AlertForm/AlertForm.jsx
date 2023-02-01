import React from 'react'
import { BiDonateHeart } from 'react-icons/bi'
import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Icon
} from '@chakra-ui/react';

function ErrorForm() {
  return (
    <div>
      <Stack spacing={3}>
        <Alert status='error'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='100px'>
          <AlertIcon mb='0.5rem' />
          Asegurate de llenar todos los campos
        </Alert>
      </Stack>
    </div>
  )
}

function SuccedForm() {
  return (
    <div>

      <Stack spacing={3}>
        <Alert status='success'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='150px'>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg' fonts={'body'}>
            Tu información ha sido enviada!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Tu acción cuenta, gracias por tu tiempo <Icon as={BiDonateHeart} />
          </AlertDescription>
        </Alert>

      </Stack>

    </div>
  )
}
export { SuccedForm, ErrorForm }