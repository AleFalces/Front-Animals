import logo from "../../assets/imagenes/logo_negro.png";

import { GiSittingDog } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  // Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <NavLink to="/home">
                <Image
                  src={logo}
                  // alt="Dan Abramov"
                  boxSize="70px"
                  mx="2rem"
                  mt="1rem"
                />
              </NavLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                to="/aboutUs"
                variant="custom"
              >
                <Text fontFamily={"body"}>Sobre Nosotros</Text>
              </NavLink>
              <NavLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                to="/donate"
                variant="custom"
              >
                <Text fontFamily={"body"}>Donaciones</Text>
              </NavLink>
              <NavLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                to="/shop"
                variant="custom"
              >
                <Text fontFamily={"body"}>Tienda</Text>
              </NavLink>
              <NavLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                to="/createPet"
                variant="custom"
              >
                <Text fontFamily={"body"}>Publicar Mascota</Text>
              </NavLink>
              <NavLink
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                to="/veterinary"
                variant="custom"
              >
                <Text fontFamily={"body"}>Veterinarias</Text>
              </NavLink>
              <Menu>
                <MenuButton>
                  <GiSittingDog size="20px" />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NavLink to="/adoptions">
                      <Text fontFamily={"body"}>Adopcion</Text>
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/lostPets">
                      <Text fontFamily={"body"}>Perdidos</Text>
                    </NavLink>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Mis mascotas</MenuItem>
                <MenuDivider />
                <MenuItem>
                  <NavLink to="/createUser">Registrarse</NavLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
