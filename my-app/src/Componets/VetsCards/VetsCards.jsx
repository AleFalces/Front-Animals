import { Link } from "react-router-dom";
import {
  Heading,
  Image,
  Box,
  Center,
  Card,
  CardBody,
  Text,
  Stack,
} from "@chakra-ui/react";

const VetsCard = ({ data: { image, name, phone, id, description } }) => {
  return (
    <Box>
      <Card boxShadow={"2xl"}>
        <Link to={`/veterinary/${id}`}>
          <CardBody>
            <Center>
              <Image
                src={image}
                alt={name}
                borderRadius="2xl"
                h={"15em"}
                maxW="75%"
              />
            </Center>
            <Stack mt="6" spacing="3">
              <Heading size="md" fontFamily={"heading"}>
                {name}
              </Heading>
              <Text
                fontWeight={500}
                color={"gray.500"}
                fontFamily={"body"}
                maxWidth="25em"
              >
                {description.charAt(0).toUpperCase() + description.substring(1)}
              </Text>
              <Text color="blue.600" fontSize="2xl" fontFamily={"body"}>
                Telefono: {phone}
              </Text>
            </Stack>
          </CardBody>
        </Link>
      </Card>
    </Box>
  );
};

export default VetsCard;
