import React from "react";
import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Text,
  Stack,
  Flex,
  HStack,
  // Icon,
  VStack,
  // createIcon,
} from "@chakra-ui/react";
// import { CheckIcon } from "@chakra-ui/icons";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Box h={"1700"} bg="brand.backgorund">
        <Flex
          w={"full"}
          h={"90vh"}
          backgroundImage={
            "url(https://www.hogarmania.com/archivos/202011/cosas-donar-refugio-animales-4-XxXx80.jpg)"
          }
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        ></Flex>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
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
              abandono, crueldad e indiferencia que viven millones de animales
              en nuestro país. (Buenos Aires/ Argentina). Propiciamos una
              actitud de respeto hacia todas las especies, entendiendo que no
              son “cosas” para ser utilizadas por el ser humano. Rechazamos todo
              tipo de explotación animal, incluyendo su uso como vestimenta,
              comida, entretenimiento y experimentación.
            </Text>

            <Box p={4}>
              <Stack
                spacing={4}
                as={Container}
                maxW={"3xl"}
                textAlign={"center"}
              >
                <Heading fontSize={"3xl"}>Nuestros Objetivos</Heading>
              </Stack>

              <Container maxW={"6xl"} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}></Text>
                      <Text color={"gray.600"}>
                        Educar sobre el respeto por la vida de los animales a
                        través de charlas y talleres educativos en lugares
                        públicos y privados.
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}></Text>
                      <Text color={"gray.600"}>
                        Asistir a animales en situación de riesgo de muerte,
                        brindarles la atención médica necesaria para
                        recuperarlos y encontrar familias responsables para su
                        adopción.
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}></Text>
                      <Text color={"gray.600"}>
                        Luchar contra el abandono, el maltrato y el sufrimiento
                        animal
                      </Text>
                    </VStack>
                  </HStack>
                  <HStack align={"top"}>
                    <VStack align={"start"}>
                      <Text fontWeight={600}></Text>
                      <Text color={"gray.600"}>
                        Organizar campañas de castración gratuitas y/o a bajo
                        costo en las zonas vulnerables donde el Estado está
                        ausente y los perros y gatos se reproducen sin control.
                      </Text>
                    </VStack>
                  </HStack>
                </SimpleGrid>
              </Container>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;

//   <h1>Nuestros objetivos</h1>
//   <ul>• Luchar contra el abandono, el maltrato y el sufrimiento animal.</ul>
//   <ul>
//     • Educar sobre el respeto por la vida de los animales a través de charlas y
//     talleres educativos en lugares públicos y privados.
//   </ul>
//   <ul>
//     • Organizar campañas de castración gratuitas y/o a bajo costo en las zonas
//     vulnerables donde el Estado está ausente y los perros y gatos se reproducen
//     sin control.
//   </ul>
//   <ul>
//     • Asistir a animales en situación de riesgo de muerte, brindarles la
//     atención médica necesaria para recuperarlos y encontrar familias
//     responsables para su adopción.
//   </ul>
//   <ul>
//     • Asesorar a la población respecto a cómo actuar en casos de maltrato
//     animal.
//   </ul>

//   <h1>¿Cómo trabajamos?</h1>
//   <ul>
//     • La acción directa: asistir a animales abandonados en situación de riesgo,
//     promoviendo su adopción y tenencia por parte de hogares responsables que
//     estén en condiciones de brindarles albergue, atención y afecto.
//   </ul>
//   <ul>
//     • La acción preventiva: fomentar entre el público general la necesidad y la
//     importancia de castrar machos y esterilizar las hembras antes del primer
//     celo y exigiendo a las autoridades la aplicación de las leyes que los
//     obligan a realizar campañas de castración masivas, gratuitas, extendidas,
//     sistemáticas y permanentes, como único medio humanitario, sustentable y no
//     eutanásico de control de la superpoblación animal.
//   </ul>
//   <ul>
//     • Las actividades asistenciales: rescatar animales en situación de riesgo
//     con el fin de recuperarlos y darles la posibilidad de formar parte de una
//     familia que le brinde lo que necesita.
//   </ul>

//   <Footer />
// </div>;
