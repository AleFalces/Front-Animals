import {
  Box,
  Image,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Avatar,
  // Input,
  // IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import logo from "../../assets/imagenes/logo_negro.png";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import magui from "../../assets/imagenes/magui.png";
import lau from "../../assets/imagenes/lau.png";
import lucho from "../../assets/imagenes/lucho.png";

const Logo = () => {
  return (
    <Box>
      <Image
        src={logo}
        // alt="Dan Abramov"
        boxSize="90px"
        mx="1rem"
        mt="1rem"
        onClick={() => window.scrollTo(0, 0)}
      />
    </Box>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithNewsletter() {
  const profiles = [magui, lau, lucho];

  return (
    <Box
      bg="brand.green.100"
      color={useColorModeValue("gray.700", "gray.200")}
      p={10}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={5}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>© 2023 Buddy ONG. All rights reserved</Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader fontWeight="extrabold">LinkedIn</ListHeader>
            <Link href={"https://www.linkedin.com/in/m-g-maceira/"} isExternal>
              Mariana Maceira
            </Link>
            <Link href={"https://www.linkedin.com/in/lauracolof/"} isExternal>
              Maria Laura Colo
            </Link>
            <Link
              href={"https://www.linkedin.com/in/ignacio-coria-de-bernardi/"}
              isExternal
            >
              Ignacio Coria
            </Link>
            <Link href={"#"}>Alexis Falces</Link>
            <Link
              href={"https://www.linkedin.com/in/julian-navarro-b25938247/"}
              isExternal
            >
              Julian Navarro
            </Link>
            <Link href={"https://www.linkedin.com/in/lucho47-dev/"} isExternal>
              Luciano Navarro
            </Link>
            <Link
              href={"https://www.linkedin.com/in/magdalena-aliaga-bb239698/"}
              isExternal
            >
              Magdalena Aliaga
            </Link>
            <Link href={"https://www.linkedin.com/in/andres-salom/"} isExternal>
              Andres Salom
            </Link>
          </Stack>
          <Stack align={"flex-start"} spacing={6}>
            <ListHeader>Proyecto</ListHeader>
            <Stack direction={"row"}>
              {profiles?.map((photos) => (
                <Avatar
                  size={"lg"}
                  borderBlockEndColor={"brand.orange"}
                  src={photos}
                />
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
