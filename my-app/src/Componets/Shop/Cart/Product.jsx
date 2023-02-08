import {
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";

export const Product = (props) => {
  const { image, name, stock, amount, price } = props;
  console.log("llega el stock?", stock);
  return (
    <Stack direction="row" spacing="5" width="full">
      <Image
        rounded="lg"
        width="120px"
        height="120px"
        fit="cover"
        src={image}
        alt={name}
        draggable="false"
        loading="lazy"
      />
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium" textAlign={"left"}>
            {name}
          </Text>
          {!stock ? (
            <Text
              color={mode("gray.600", "gray.400")}
              fontSize="sm"
              textAlign={"left"}
            >
              Sin Stock
            </Text>
          ) : (
            <Text color={mode("gray.600", "gray.400")} fontSize="sm">
              Stock:{stock}
            </Text>
          )}

          <Text color={mode("gray.600", "gray.400")} fontSize="sm">
            Cantidad:{amount}
          </Text>
        </Stack>
        <Text color={mode("gray.600", "gray.400")} fontSize="sm">
          Precio:${price}
        </Text>
      </Box>
    </Stack>
  );
};
