
import React from "react";
/* import "./Card.css"; */
import {
  Heading,
  Image,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';

import { IoMdMale} from 'react-icons/io'; 
import { IoMdFemale} from 'react-icons/io'; 


const Card = ({ data: { size, img, sex, species, age, area } }) => {
  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          h={'450px'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
            <Center>
          <Image
            size={'lg'}
            src={
              img
            }
            borderRadius="7px"
            h={'150px'}
            alt={species}
            mb={4}
            pos={'relative'}
          />
          </Center>
          <Heading fontSize={'2xl'} fontFamily={'heading'} textTransform="uppercase">
            {species}            
          </Heading>        
          <Text fontWeight={500} color={'gray.500'} mb={1}  fontFamily={'body'} textTransform="uppercase">
            {size}  
            <Box pt= '0px'> {sex === "macho"?<Icon as= { IoMdMale}></Icon> :<Icon as= { IoMdFemale}></Icon>}</Box>        
          </Text>
     
          <Text
          fontWeight={'bold'}
            textAlign={'center'}
            color={'gray.500'}
            fontFamily={'heading'} 
            px={3}>
            Tag{' '}
            <Link href={'#'} color={'blue.400'}>
              #adoptaun{species}
            </Link>{' '}
            en tus post!
          </Text>

          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              {area}
            </Badge>
          </Stack>

          <Stack mt={4} direction={'column'}  spacing={4}>
            <Center>
{/*               <Button
                loadingText="Post mascota"
                fontFamily={'body'}
                size="md"
                w='50%'
                bg={'orange.300'}
                color={'white'}
                _hover={{
                  bg: 'orange.400',
                }}>
               <Text>Conoceme</Text> 
              </Button> */}
            </Center>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
}


export default Card;










/* import React from "react";
import "./Card.css";

const Card = ({ data: { size, img, sex, species, age } }) => {
  return (
    <div className="card2">
      <div className="face front">
        <img src={img} alt="img not found" />
      </div>
      <div className="face back">
        <h3>Sexo: {sex}</h3>
        <h3>Especie: {species}</h3>
        <h3>Tamaño {size}</h3>
        <h3>Edad: {age}</h3>
        <div className="link2">
          <a href="#">Click for details</a>
        </div>
      </div>
    </div>
  );
};


export default Card;

 */