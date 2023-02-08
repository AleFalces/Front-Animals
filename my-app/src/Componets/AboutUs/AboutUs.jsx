import React from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  Icon,
  Image,
  Center
} from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  BiMessageRoundedAdd,
  BiDonateHeart,
  BiHomeHeart,
} from "react-icons/bi";

const AboutUs = () => {
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack alignItems={"center"}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={"gray.600"}>{text}</Text>
      </Stack>
    );
  };
  return (
    <>
      <Navbar />


      <Box bg={'brand.green.200'} py={['2rem', '4rem', '4rem', '3rem']}>
        <SimpleGrid columns={[1, 1, 1, 2]} spacing={5} vW='100%' px='1rem' >
          <Center>
            <Box pt='3rem' >
              <Image src="https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-4-XxXx80.jpg" alt="dog's refugee"
                borderRadius='15px' ></Image>
            </Box>
          </Center>

          
            <Box alignItems="left" py={1} pr={"90px"} >
              <Stack
                as={Box}
                textAlign={"left"}
                spacing={{ base: 4, md: 5 }}
                py={{ base: 10, md: 10 }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
                  /*   lineHeight={"100%"} */
                  pl='2rem'>
                  Hola!
                </Heading>
                <Text as={"span"} color={"brand.orange"} fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }} pl='2rem'>
                  Somos Buddy ONG
                </Text>
                <Text color={"gray.500"} fontSize={['1.3rem', '1.5rem', '1.5rem']} pl='2rem'>
                  Somos organización sin fines de lucro liderada por un grupo de
                  voluntarios que buscan superar la situación de sobrepoblación,
                  abandono, crueldad e indiferencia que viven millones de
                  animales en nuestro país.
                  Propiciamos una actitud de respeto
                  hacia todas las especies.
                </Text>
              </Stack>
            </Box>
         
        </SimpleGrid>


      </Box>


      <Center bg={'orange.200'} pt='4rem'>
        <SimpleGrid columns={1} pt='1rem' pb='1rem' bg={'orange.200'} m={'1rem'} >
          <Box borderRadius={'7px'}  >
            {/* <AspectRatio ratio={1}>  */}
            <iframe
              width="720"
              height="405"
              src="https://www.youtube.com/embed/rOW_cTjVleg"
              title="BuddyVid"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            {/*  </AspectRatio>  */}
          </Box>
        </SimpleGrid>
      </Center>




      <Box pt={20} pb='2rem' bg={'brand.green.200'}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"5xl"}>Nuestros Objetivos</Heading>
        </Stack>
      </Box>
      <Box p={4} bgColor={"brand.green.200"} pb='5rem'>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} >
          <Feature 
            icon={
              <Icon
                as={BiMessageRoundedAdd}
                w={10}
                h={10}
                color={"brand.orange"}
              />
            }
            title={"Lucha por los animales"}
            text={
              "Luchar contra el abandono, el maltrato y el sufrimiento animal.Educar sobre el respeto por la vida de los animales a través de charlas y talleres educativos en lugares públicos y privados"
            }
          />
          <Feature
            icon={
              <Icon as={BiHomeHeart} w={10} h={10} color={"brand.orange"} />
            }
            title={"Asistencia"}
            text={
              "Asistir a animales en situación de riesgo de muerte, brindarles la atención médica necesaria para recuperarlos y encontrar familias responsables para su adopción."
            }
          />
          <Feature
            icon={
              <Icon
                as={BiDonateHeart}
                w={10}
                h={10}
                color={"brand.orange"}
                alignItems={"center"}
              />
            }
            title={"Donación"}
            text={
              "Organizar campañas de castración gratuitas y/o a bajo costo en las zonas vulnerables"
            }
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
