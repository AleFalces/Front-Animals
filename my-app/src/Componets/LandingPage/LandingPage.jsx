import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/imagenes/logo_negro.png";
import Login from "../Login/Login";
import { useAuth0 } from "@auth0/auth0-react";
import "./LandingPage.css";
import { GiSittingDog } from 'react-icons/gi';
import { GiCat } from 'react-icons/gi';
import { RiHeartAddLine } from 'react-icons/ri';
import { RxDoubleArrowDown } from 'react-icons/rx'

import magui from "../../assets/imagenes/magui.png"
import lucho from "../../assets/imagenes/lucho.png"
import marian from "../../assets/imagenes/marian.png"
import lau from "../../assets/imagenes/lau.png"
import juli from"../../assets/imagenes/juli.png"
import ale from"../../assets/imagenes/ale.png"
import igna from"../../assets/imagenes/igna.png"
import andy from"../../assets/imagenes/andy.png"


// const { isAuthenticated, user } = useAuth0();
// const navigate = useNavigate();
/* const profilePics = [ lau, lucho, magui] */


import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,

  Icon,
  Center
} from '@chakra-ui/react';

const avatars = [

  {
    name: 'Magdalena Aliaga ',
    url: magui,
  },
  {
    name: 'Ignacio Coria De Bernardi',
    url: igna,
  },
  {
    name: 'Mariana Maceira',
    url: marian,
  },
  {
    name: 'Laura Coló',
    url: lau,
  },
  {
    name: 'Alexis Falces',
    url: ale,
  },
  {
    name: 'Julian Navarro',
    url: juli,
  },
  {
    name: 'Andrés Solom',
    url: andy,
  },
  {
    name: 'Luciano Navarro',
    url: lucho,
  },
];

const LandingPage = () => {


  return (
    <Box bg="brand.green.100">
    <Box position={'relative'} vH= '100%' vW='100%'>
      <Container 
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 45 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={0.5}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '5xl' }}>
          
            <Center >
              <img src={logo} alt="logo" width="70%" name="logo" />
            </Center >


            <Text fontFamily="body" fontWeight={'light'} fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '4xl' }}> tu ayuda suma</Text>

            <Center>
              <Stack direction={'row'} spacing={4} align={'center'} mt='2rem' >
                <Icon as={GiSittingDog} color="orange" boxShadow="lg" />
                <Icon as={RiHeartAddLine} color="brand.green.300" boxShadow="lg" />
                <Icon as={GiCat} color="orange" boxShadow="lg" />
              </Stack>
            </Center>

          </Heading>
       
        
          <Center >
            <Stack direction={'row'} spacing={3} align={'center'} >
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    /* size={useBreakpointValue({ base: 'md', md: 'lg' })} */
                    position={'relative'}
                    zIndex={2}
                    boxShadow="lg"
                    _before={{
                      content: '""',
                      width: 'full',
                      height: 'full',
                      rounded: 'full',
                      transform: 'scale(1.125)',
                      bgGradient: 'linear(to-bl, red.400,orange.400)',
                      position: 'absolute',
                      zIndex: -1,
                      top: 0,
                      left: 0,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                +
              </Text>
              <Flex
                align={'center'}
                justify={'center'}
                fontFamily={'heading'}
                fontSize={{ base: 'sm', md: 'lg' }}
                bg={'brand.green.300'}
                boxShadow="lg"
                color={'white'}
                rounded={'full'}
                minWidth={useBreakpointValue({ base: '60px', md: '75px' })}
                minHeight={useBreakpointValue({ base: '60px', md: '75px' })}
                position={'relative'}
                borderStyle='dotted'
                borderWidth={'0.2rem'}
                borderColor="orange.200"
             >
                  
               <Text fontWeight={'bold'} textShadow={'1rem'}>VOS</Text>
              </Flex>
            </Stack>
          </Center>
        </Stack>

        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontFamily={"heading"}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Sé parte de Buddy{" "}
              <Text
                as={'span'}
                bg="brand.green.300"
                bgClip="text">
                !
              </Text>
            </Heading>

            <Center>
              <Box w='70%'>
                <Text noOfLines={[4, 4, 3]} color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                  Estamos buscando personas que amen los animales, como vos!
                </Text>
                <Icon as={RxDoubleArrowDown} mt='1rem' fontSize={'4rem'} color="brand.green.300" />
              </Box>
            </Center>
          </Stack>

          <Box as={'form'} mt={2}>
            <Stack spacing={1}>
              <Login name="Login" />
            </Stack>
          </Box>


        </Stack>
      </Container>
    </Box>
    </Box>
  );
}

export default LandingPage;







