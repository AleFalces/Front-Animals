import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { VeterinaryDetails } from "../../Redux/Actions/index";
import {
  Box,
  SimpleGrid,
  Center,
  Heading,
  Text,
  Image,
  Icon,
  Divider,
  WrapItem,
  Wrap,
  IconButton,
  Avatar,
  Spinner,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { RiHospitalLine } from "react-icons/ri";

const VetsDetails = ({ handleSetUserFlag }) => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();
  const Detail = useSelector((state) => state.vetsDetail);
  const vetsDetail = Detail[0];

  useEffect(() => {
    dispatch(VeterinaryDetails(paramsId));
    window.scrollTo(0, 0);
  }, [dispatch, paramsId]);

  return (
    <>
      <Navbar handleSetUserFlag={handleSetUserFlag}/>
      {!Detail?.length ? (
        <Box height="100vh" position="relative">
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              mt="15em"
            />
          </Center>
          <Text fontFamily="heading" fontSize={"3xl"} mt="2em">
            Cargando...
          </Text>
        </Box>
      ) : (
        <Box bg="brand.green.200" pb={["1rem", "2rem", "2rem"]}>
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={["10px", "10px", "30px"]}>
            <Center w="100%" h="100%">
              <Box
                height="300px"
                w={[250, 400, 600]}
                pl="2"
                ml={["1rem", "0rem", "6rem"]}
                mt={["1rem", "0rem", "4rem"]}
                pt={["8rem", "6rem", "2rem"]}
                borderRadius="15px"
              >
                <Heading
                  as="h1"
                  size="3xl"
                  textTransform="uppercase"
                  color="gray.500"
                >
                  {vetsDetail.name}
                </Heading>
                <Heading
                  as="h2"
                  size="lg"
                  textTransform="uppercase"
                  color="gray.500"
                >
                  {vetsDetail.telefono}{" "}
                </Heading>
                <Icon
                  as={RiHospitalLine}
                  color="orange"
                  boxSize={14}
                  mt="1rem"
                />

                <Divider
                  orientation="horizontal"
                  mt="2rem"
                  pt="5px"
                  bg="gray.200"
                  borderRadius="7px"
                />
              </Box>
            </Center>
            <Center w="100%">
              <Box
                height="300px"
                w={[600, 600, 700]}
                ml={["0rem", "1rem", "1rem"]}
                mt={["0rem", "0rem", "1rem"]}
                pt={["0rem", "5rem", "1rem"]}
              >
                <Center w="100%" h="100%">
                  <Image
                    src={vetsDetail.image}
                    alt={vetsDetail.name}
                    borderRadius="50px"
                    objectFit="cover"
                    w="60%"
                  />
                </Center>
              </Box>
            </Center>
          </SimpleGrid>
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            spacing={["20px", "20px", "30px"]}
            mt="3rem"
          >
            <Center>
              <Box
                bg="brand.green.200"
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                height={["400px", "300px", "340px"]}
                w={[250, 400, 700]}
                borderRadius="15px"
                ml={["1rem", "1rem", "3rem"]}
                my={["0rem", "2rem", "0rem"]}
                pb="1rem"
              >
                <Heading as="h4" size="lg" pt="2rem" color="gray.600">
                  Sobre nosotros
                </Heading>
                <Text
                  fontFamily={"body"}
                  fontWeight={"300"}
                  noOfLines={[4, 4, 3]}
                  px="1rem"
                  py={["2rem", "1rem", "2rem"]}
                  my="0rem"
                  fontSize={{ base: "14px", md: "18px", lg: "20px" }}
                  color="gray.500"
                >
                  {vetsDetail.description}
                </Text>
                <Text
                  noOfLines={[1, 2, 3]}
                  fontSize={{ base: "14px", md: "18px", lg: "18px" }}
                  color="orange.500"
                  textTransform={"uppercase"}
                  fontFamily={"heading"}
                  fontWeight="bold"
                  pb={["0rem", "0rem", "1rem"]}
                >
                  {vetsDetail.email}
                </Text>
                <Text
                  fontFamily={"body"}
                  fontWeight={"300"}
                  noOfLines={[2, 2, 3]}
                  fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                  color="gray.500"
                  py={["3rem", "2rem", "0rem"]}
                >
                  Se encuentra en la zona de:{" "}
                  <Text
                    color="orange.500"
                    textTransform={"uppercase"}
                    fontFamily={"heading"}
                    fontWeight="bold"
                  >
                    {vetsDetail.address}{" "}
                  </Text>
                </Text>
              </Box>
            </Center>
            <Center w="100%">
              <Box
                bg="orange.100"
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                height="300px"
                w={[250, 300, 400]}
                borderRadius="15px"
                ml={{ md: "0rem", lg: "1rem" }}
                mt={["2rem", "2rem", "0rem"]}
              >
                {/* Little photos */}
                <Center w="100%">
                  <Wrap m="1rem" mt="1rem" pt="1rem">
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name={vetsDetail.name}
                        src={vetsDetail.image}
                      />{" "}
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name={vetsDetail.name}
                        src={vetsDetail.image}
                      />{" "}
                    </WrapItem>
                    <WrapItem>
                      <Avatar
                        size="lg"
                        name={vetsDetail.name}
                        src={vetsDetail.image}
                      />{" "}
                    </WrapItem>
                  </Wrap>
                </Center>

                <Heading as="h4" size="sm" pt="2rem">
                  {" "}
                  Puedes contactarme!
                </Heading>
                <IconButton
                  as="a"
                  colorScheme="teal"
                  aria-label="Call Segun"
                  target="_blank"
                  size="lg"
                  px="3rem"
                  mt="1rem"
                  href={`https://wa.me/${vetsDetail.phone}`}
                  icon={<PhoneIcon />}
                />
              </Box>
            </Center>
          </SimpleGrid>
        </Box>
      )}
      <Footer />
    </>
  );
};

export default VetsDetails;
