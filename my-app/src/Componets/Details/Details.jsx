
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { petDetails } from "../../Redux/Actions/index";
/* import "./Detail.css"; */
import { extendTheme } from '@chakra-ui/react'



import {
	Box,
    Heading,
    Center,
    Text,
    Image,
    Flex,
    Grid, GridItem,
    IconButton, Icon, Avatar, Wrap, WrapItem
} from '@chakra-ui/react';
import { GiSittingDog } from 'react-icons/gi'
import { PhoneIcon } from '@chakra-ui/icons'

const Details = () => {
    const dispatch = useDispatch();
    const { paramsId } = useParams();
    const Det = useSelector((state) => state.Detail);

    useEffect(() => {
        dispatch(petDetails(paramsId));
    }, [dispatch]);

    return (
        <div className='detailContainer'>

            <Navbar />
<Box  bg="brand.green.200" >
            <Grid
                templateAreas={`
                  " space info1  info1 img "
                  "space info2  info2 img "
                  "space info2  info2 info3 "`}
                gridTemplateRows={'60%  3fr  1fr'}
                gridTemplateColumns={'5% 30%  30% 25%'}
                h='500px'
                gap='4'
                color='blackAlpha.700'
                fontWeight='bold'
			
            >

				

                {/* Info1 */}
                <GridItem pl='2'  bg="brand.green.100" area={'info1'} py='3rem' mt="2rem"  borderRadius= '15px' boxSize= 'small'>
                    <Heading as='h1' size='4xl'>{Det.species} </Heading>
                    <Heading as='h2' size='xl'>{Det.sex} </Heading>
                    <Icon as={GiSittingDog} color='orange' boxSize={14}mt= '1rem' />
                </GridItem>

                {/* Info2 */}
                <GridItem pl='2' bg="brand.green.100"area={'info2'} borderRadius= '15px' >
                    <Heading as='h4' size='lg' pt='3rem'> Un poco sobre mi</Heading>
                    <Text fontFamily= {'body'} noOfLines={[1, 2, 3]} pt="1rem">
                        {Det.detail}
                    </Text>
                    <Text noOfLines={[1, 2, 3]} pt="0.5rem">
                        {Det.age}
                    </Text>
                    <Text  fontFamily= {'body'} noOfLines={[1, 2, 3]} pt="0.5rem">
                        Se encuentra en la zona de: {Det.area}
                    </Text>

                </GridItem>

			
                {/* Info3  Contacto*/}
                <GridItem pl='4' bg='pink.300' area={'info3'} borderRadius= '15px' >

                    {/* Fotitos */}
                    <Wrap>
                        <WrapItem>
                            <Avatar size='xl' name='Segun Adebayo' src={Det.img} pt='2rem' />{' '}
                        </WrapItem>
                        <WrapItem>
                            <Avatar size='xl' name='Segun Adebayo' src={Det.img} pt='2rem' />{' '}
                        </WrapItem>
                        <WrapItem>
                            <Avatar size='xl' name='Segun Adebayo' src={Det.img} pt='2rem' />{' '}
                        </WrapItem>
                    </Wrap>



                    <Heading as='h4' size='md' pt='2rem'> Puedes contactarme!</Heading>
                    <IconButton
                        colorScheme='teal'
                        aria-label='Call Segun'
                        size='lg'
                        px='3rem'
                        my='1rem'
                        icon={<PhoneIcon />}
                    />
                </GridItem>

                {/* Imagen */}
                <GridItem p='1'  area={'img'} mt="1rem">
                    < Flex direction='column'  >
                        <Center w='100%' h='100%' >
                            <Image src={Det.img} alt='dogs' borderRadius='50px' boxSize='100%' objectFit='cover' mt="1rem" />
                        </Center>
                    </Flex>
                </GridItem>
            </Grid>


			





			</Box>



            {/* <Footer /> */}
        </div>
    );
}



export default Details;















