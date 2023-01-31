import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { BsPerson } from "react-icons/bs";
import { MdOutlinePets } from "react-icons/md";
import { GoLocation } from "react-icons/go";

import {
  Box,
  Stack,
  Flex,
  Button,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";

function StatsCard({ icon, title, stat }) {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Home = () => {
  const { user } = useAuth0();

  return (
    <>
      <Navbar />
      <Box h={"1600"} bg="brand.backgorund">
        <Flex
          w={"full"}
          h={"90vh"}
          backgroundImage={
            "url(https://www.hogarmania.com/archivos/201712/mascotas-perros-perdidos-1280x720x80xX.jpg)"
          }
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            w={"full"}
            alignItems={"left"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 150 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          >
            <Stack maxW={"2xl"} align={"flex-left"} spacing={6}>
              <Text
                color={"white"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                textAlign={"left"}
                justifyContent={"left"}
              >
                Abocados a difundir, proteger y promover los derechos de los
                animales.
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"brand.orange"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "brand.darkBlue" }}
                >
                  <NavLink to="/aboutUs">Conoce sobre nosotros!</NavLink>
                </Button>
                <Button
                  bg={"whiteAlpha.300"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "whiteAlpha.500" }}
                >
                  <NavLink to="/adoptions">Salva Vidas</NavLink>
                </Button>
              </Stack>
            </Stack>
          </VStack>
        </Flex>
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={"4xl"}
            py={10}
            fontWeight={"bold"}
            color={"brand.darkBlue"}
          >
            Cada vez somos más grandes, vos podes formar parte!
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"Donantes"}
              stat={"+5,000"}
              icon={<BsPerson size={"3em"} />}
            />
            <StatsCard
              title={"Animales Rescatados"}
              stat={"1,000"}
              icon={<MdOutlinePets size={"3em"} />}
            />
            <StatsCard
              title={"Veterinarias amigas"}
              stat={"7"}
              icon={<GoLocation size={"3em"} />}
            />
          </SimpleGrid>
        </Box>
        <Box maxW="7xl" mx={"auto"} pt={20} px={{ base: 2, sm: 12, md: 17 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <Flex
              w={800}
              h={"30vh"}
              backgroundImage={
                "url(https://mestizos.cl/wp-content/uploads/2022/03/pexels-helena-lopes-1904105.jpg)"
              }
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              borderRadius={20}
            ></Flex>
            <Box>
              <Text w={200} h={"30vh"} textAlign={"left"}>
                Adopta los animales que necesitan un hogar!
              </Text>
            </Box>

            <Flex
              w={800}
              h={"30vh"}
              backgroundImage={
                "url(https://www.catit.com/wp-content/uploads/2021/10/Why-does-my-cat-need-a-collar.jpg)"
              }
              backgroundSize={"cover"}
              backgroundPosition={"center center"}
              borderRadius={20}
            ></Flex>
            <Text textAlign={"left"}>
              Ayudanos a difundir a las mascotas perdidas para que tengan mas
              alcance a sus familias
            </Text>
          </SimpleGrid>
        </Box>
      </Box>

      <Footer />
    </>
  );
};
export default Home;

// .home {
//   height: 200vh;
//   background: #f6f5f5;
// }

//bg={"brand.orange"}
//"brand.green.200";
