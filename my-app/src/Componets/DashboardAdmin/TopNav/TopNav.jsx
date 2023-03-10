import React from "react";
import styles from "./TopNav.module.css";
import { Link } from "react-router-dom";
import { Button, Box, Icon, SimpleGrid, useBreakpointValue } from "@chakra-ui/react";
import { MdArrowBackIosNew } from "react-icons/md";

const TopNav = () => {
  return (
    <nav /* className={styles.topNav} */>
      <SimpleGrid columns={[2, 4]} pt="2rem" bg={"brand.green.100"} pb={"1rem"}>
      <Box bg={"#1a202c"} maxW="7xl" mx={"auto"} pt={2} px={{ base: 2, sm: 12, md: 17 }} borderRadius="12px"
      color={"white"}
      fontWeight={700}
      alignItems={"center"}
      lineHeight={1.0}
      fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
      textAlign={"center"}
      justifyContent={"center"}>Administrar Página
      </Box>

        <Box>
          <Link to={"/home"}>
            <Icon
              as={MdArrowBackIosNew}
              color="orange.400"
              boxSize={5}
              _hover={{
                color: "grey",
                boxSize: "7",
              }}
            />
            <Icon
              as={MdArrowBackIosNew}
              color="orange.400"
              boxSize={5}
              _hover={{
                color: "grey",
                boxSize: "7",
              }}
            />
            <Button
              fontFamily={"body"}
              bg="base.green.100"
              color={"grey"}
              _hover={{
                color: "orange.400",
              }}
              p="0"
              mr="1rem">
              {" "}
              Atrás
            </Button>
          </Link>
        </Box>

        <Box>
          <Link to={"/dashboard/createProduct"}>
            <Button
              loadingText="Publicar el producto"
              size="lg"
              bg={"brand.green.300"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}>
              Publicar producto
            </Button>
          </Link>
        </Box>

				<Box>
					<Link to={"/dashboard/createVet"}>
						<Button
							loadingText="Afiliar Veterinaria"
							size="lg"
							bg={"brand.green.300"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}>
							Afiliar Veterinaria
						</Button>
					</Link>
				</Box>
			</SimpleGrid>
		</nav>
	);
          
};

export default TopNav;
