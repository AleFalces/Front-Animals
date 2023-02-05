import React from "react";

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
  Icon,
} from "@chakra-ui/react";

import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Card = ({ data: { id, size, img, sex, species, age, area }, value} ) => {
  const navigate = useNavigate()
  console.log(id);
function handlerNavigateUpdate(e) {
  e.preventDefault();
  navigate(`/updatePet/${id}`)
}
  return (
    <Box>
      <Center py={6}>
        <Box
          maxW={"320px"}
          w={"full"}
          h={"450px"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Center>
            <Image
              size={"lg"}
              src={img}
              borderRadius="7px"
              h={"150px"}
              alt={species}
              mb={4}
              pos={"relative"}
            />
          </Center>
          <Heading
            fontSize={"2xl"}
            fontFamily={"heading"}
            textTransform="uppercase"
          >
            {species}
          </Heading>
          <Text
            fontWeight={500}
            color={"gray.500"}
            mb={1}
            fontFamily={"body"}
            textTransform="uppercase"
          >
            {size}
            <Box pt="0px">
              {" "}
              {sex === "macho" ? (
                <Icon as={IoMdMale}></Icon>
              ) : (
                <Icon as={IoMdFemale}></Icon>
              )}
            </Box>
          </Text>

          <Text
            fontWeight={"bold"}
            textAlign={"center"}
            color={"gray.500"}
            fontFamily={"heading"}
            px={3}
          >
            Tag{" "}
            <Link href={"#"} color={"blue.400"}>
              #adoptaun{species}
            </Link>{" "}
            en tus post!
          </Text>

          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              {area}
            </Badge>
          </Stack>
          {value=== "update"?<button className="modifyButton" onClick={(e) => handlerNavigateUpdate(e)}>Modificar</button>:null}

          <Stack mt={4} direction={"column"} spacing={4}>
            <Center>
            </Center>
          </Stack>
        </Box>
      </Center>
    </Box>
  );
};

export default Card;





