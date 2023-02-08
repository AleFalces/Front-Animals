import React, {useEffect} from "react";
import {
  Card,
  CardBody,
  Text,
  Heading,
  Stack,
  StackDivider,
  Box,
  Image, Divider, Center, Select,
  Button

} from "@chakra-ui/react";
import { deletePetAdmin } from "../../../../Redux/Actions";
import { useDispatch} from "react-redux";
import { getPets } from "../../../../Redux/Actions";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";

export default function PetCard({ id, size, species, age, img, detail, area, status, userId }) {

const dispatch = useDispatch()
const loggedUser = localStorage.getItem("loggedUser");
const [logged] = JSON.parse(loggedUser);
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = React.useRef();


function handlerDeletePet(e, id){
  // e.preventDefault(e)
  dispatch(deletePetAdmin(id))
}

  return (
    <div>
      <Card>
        <Box maxW="350px">
          <CardBody>         
              <Box>
                <Heading size="xs">
                  ESPECIE <Text px='1.5rem' pt="2"> {species} </Text>
                </Heading>
              </Box>
              <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
              <Box>
                <Heading size="xs" mt='1rem'>
                  EDAD:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {age}
                </Text>
                <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
                <Center>
                <Select placeholder='ID' w='50%' mt='1rem'>
                    <option value= 'option'>{id}</option>
                  </Select>
                  </Center>
                  <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
                <Heading size="xs" pt='1rem'>
                  DETALLES:<Text pt="2" fontSize="sm">
                    {detail}
                  </Text>
                </Heading>
                <Divider h='0.2rem' bg='brand.green.100'mt='1rem' />
                <Center>
                  <Image
                    boxSize='100px'
                    objectFit='cover'
                    src={img}
                    alt='mascotas'
                    my='1rem'
                    borderRadius={'7px'}
                  />
                </Center>
                <Center height='50px'>
                  <Heading size="xs" >
                    UBICACIÓN: <Text px='2rem' pt="2"> {area} </Text>
                  </Heading>
                  <Divider orientation='vertical' bg='brand.green.100' />
                  <Heading size="xs">
                    ESTADO: <Text px='1.5rem' pt="2"> {status}  </Text>
                  </Heading>
                </Center>
                <Center>
                <Button
                  fontFamily={"body"}
                  bg={"orange.300"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  onClick={()=>{onOpen();}}
                >
                  Dejar de publicar
                </Button>
              
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
              >
                <AlertDialogOverlay>
                  <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                      ¡Hey!
                    </AlertDialogHeader>
                    <AlertDialogBody>
                      ¿Quieres dejar de publicar esta mascota?
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button ref={cancelRef} onClick={onClose}>
                        Mejor no.
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={(e) => {
                          handlerDeletePet(e, id);
                          onClose();
                        }}
                        ml={3}
                      >
                        Sí, eso quiero!
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
                {/* <Button
                onClick={(e) => {handlerDeletePet(e, id)}}
                bg={"#40c2bb"}
                color={"white"}
                  _hover={{
                    bg: "green.400",
                  }}
                >Dejar de publicar
                </Button> */}
                </Center>
              </Box>
          </CardBody>
        </Box>
      </Card>
    </div>
  );
}
