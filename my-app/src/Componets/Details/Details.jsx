import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
import   "./Detail.css";


import {
	Heading,
	Avatar,
	Box,
	Center,
	Text,
	Stack,
	Button,
	Link,
	Badge,
	useColorModeValue,
  } from '@chakra-ui/react';



const Details = () => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const Det = useSelector((state) => state.Detail);

  useEffect(() => {
    dispatch(petDetails(paramsId));
  }, [dispatch]);

	return (
		<div className = 'detailContainer'>

			<Navbar/>
<Center py={6}>
      <Box   maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('orange.200', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
			Det.img
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
		{Det.species}
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
		{Det.size}
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
         {Det.detail}
        </Text>

        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            {Det.sex}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            {Det.age}
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            {Det.area}
          </Badge>
        </Stack>

        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Box>
    </Center>

	<Footer />
	</div>
  );
}




						{/* <h3>Especie <p>{Det.species}</p> </h3> 
						<h3>Tamaño <p>{Det.size}</p> </h3>
						<h3>Sexo <p>{Det.sex}</p> </h3>  
						<h3>Detalle <p> {Det.detail}</p> </h3> 
						<h3>Edad <p> {Det.age}</p> </h3> 
						<h3>Area <p>{Det.area}</p> </h3> */} 


			
			

		
	



export default Details;
