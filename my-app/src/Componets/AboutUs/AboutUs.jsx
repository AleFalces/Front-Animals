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
  AspectRatio,
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
      <Box minHeight={"80vh"} bg="brand.backgorund" paddingBottom={"3rem"}>
        <Box maxW="20xl" mx={"auto"} pt={20} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }}>
            <Box
              w={"2xl"}
              h={"80vh"}
              backgroundImage={
                "url(https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-4-XxXx80.jpg)"
              }
              boxShadow="2xl"
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              borderRightRadius={"50px"}
            />

            <Box alignItems="left" py={1} pr={"90px"}>
              <Stack
                as={Box}
                textAlign={"left"}
                spacing={{ base: 4, md: 5 }}
                py={{ base: 20, md: 36 }}
              >
                <Heading
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                  lineHeight={"150%"}
                >
                  Hola!
                  <br />
                  <Text as={"span"} color={"brand.orange"}>
                    Somos Buddy ONG
                  </Text>
                </Heading>
                <Text color={"gray.500"}>
                  Somos organización sin fines de lucro liderada por un grupo de
                  voluntarios que buscan superar la situación de sobrepoblación,
                  abandono, crueldad e indiferencia que viven millones de
                  animales en nuestro país.Propiciamos una actitud de respeto
                  hacia todas las especies
                </Text>
              </Stack>
            </Box>
          </SimpleGrid>
        </Box>

        <Box pb={"100px"} p={20}>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Heading fontSize={"3xl"}>Nuestros Objetivos</Heading>
          </Stack>
        </Box>
        <Box p={4} bgColor={"brand.orange"}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
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
        <AspectRatio maxW="500px" ratio={1}>
          <iframe
            width="720"
            height="405"
            src="https://www.youtube.com/embed/rOW_cTjVleg"
            title="BuddyVid"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </AspectRatio>
      </Box>
      {/* </Stack>
      </Container> */}
      <Footer />
    </>
  );
};

export default AboutUs;
