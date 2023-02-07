import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  filterBySearchArea,
  filterAdoptionPets,
  getPets,
} from "../../Redux/Actions";


import { Box, SimpleGrid, Center, FormControl, FormLabel, Select, Button, Heading, Input } from '@chakra-ui/react'


const FilterBar = ({ value, paginate }) => {
  const dispatch = useDispatch();
  const defaultValue = "defaultValue";
  const [input, setInput] = useState("");
  const handlerInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  let arrayFilterValues = [];
  function handlerFilterBySpecie(e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if (
        arrayFilterValues.includes("gato") ||
        arrayFilterValues.includes("perro")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "perro" || el === "gato" ? (index = i) : null
        );
        if (index === 0) return arrayFilterValues.shift();
        if (index === arrayFilterValues.length - 1)
          return arrayFilterValues.pop();
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        return (arrayFilterValues = result);
      }
    }
    if (e.target.value === "gato") {
      if (arrayFilterValues.includes("perro")) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "perro" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "perro") {
      if (arrayFilterValues.includes("gato")) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "gato" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
  }

  function handlerFilterBySex(e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if (
        arrayFilterValues.includes("macho") ||
        arrayFilterValues.includes("hembra")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "macho" || el === "hembra" ? (index = i) : null
        );
        if (index === 0) return arrayFilterValues.shift();
        if (index === arrayFilterValues.length - 1)
          return arrayFilterValues.pop();
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        return (arrayFilterValues = result);
      }
    }
    if (e.target.value === "macho") {
      if (arrayFilterValues.includes("hembra")) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "hembra" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "hembra") {
      if (arrayFilterValues.includes("macho")) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "macho" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
  }

  function handlerFilterByAge(e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if (
        arrayFilterValues.includes("cachorro") ||
        arrayFilterValues.includes("joven") ||
        arrayFilterValues.includes("adulto")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "cachorro" || el === "joven" || el === "adulto"
            ? (index = i)
            : null
        );
        if (index === 0) return arrayFilterValues.shift();
        if (index === arrayFilterValues.length - 1)
          return arrayFilterValues.pop();
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        return (arrayFilterValues = result);
      }
    }
    if (e.target.value === "cachorro") {
      if (
        arrayFilterValues.includes("joven") ||
        arrayFilterValues.includes("adulto")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "joven" || el === "adulto" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "joven") {
      if (
        arrayFilterValues.includes("cachorro") ||
        arrayFilterValues.includes("adulto")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "cachorro" || el === "adulto" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "adulto") {
      if (
        arrayFilterValues.includes("cachorro") ||
        arrayFilterValues.includes("joven")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "cachorro" || el === "joven" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
  }

  function handlerFilterBySize(e) {
    e.preventDefault();
    if (e.target.value === defaultValue) {
      if (
        arrayFilterValues.includes("pequeño") ||
        arrayFilterValues.includes("mediano") ||
        arrayFilterValues.includes("grande")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "pequeño" || el === "mediano" || el === "grande"
            ? (index = i)
            : null
        );
        if (index === 0) return arrayFilterValues.shift();
        if (index === arrayFilterValues.length - 1)
          return arrayFilterValues.pop();
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        return (arrayFilterValues = result);
      }
    }
    if (e.target.value === "pequeño") {
      if (
        arrayFilterValues.includes("mediano") ||
        arrayFilterValues.includes("grande")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "mediano" || el === "grande" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "mediano") {
      if (
        arrayFilterValues.includes("pequeño") ||
        arrayFilterValues.includes("grande")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "pequeño" || el === "grande" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
    if (e.target.value === "grande") {
      if (
        arrayFilterValues.includes("pequeño") ||
        arrayFilterValues.includes("mediano")
      ) {
        let index;
        arrayFilterValues.forEach((el, i) =>
          el === "pequeño" || el === "mediano" ? (index = i) : null
        );
        if (index === 0) {
          arrayFilterValues.shift();
          return arrayFilterValues.push(e.target.value);
        }
        if (index === arrayFilterValues.length - 1) {
          arrayFilterValues.pop();
          return arrayFilterValues.push(e.target.value);
        }
        let result = [
          ...arrayFilterValues.slice(0, index),
          ...arrayFilterValues.slice(index + 1),
        ];
        result.push(e.target.value);
        return (arrayFilterValues = result);
      } else {
        arrayFilterValues.push(e.target.value);
      }
    }
  }

  let selectSpeciesValue = document.getElementById("species");
  let selectSexValue = document.getElementById("age");
  let selectAgeValue = document.getElementById("size");
  let selectSizeValue = document.getElementById("sex");
  function handlerFilterButton(e) {
    e.preventDefault();
    dispatch(filterAdoptionPets(arrayFilterValues, value));
    paginate(1);
    selectSpeciesValue.value = defaultValue;
    selectSexValue.value = defaultValue;
    selectAgeValue.value = defaultValue;
    selectSizeValue.value = defaultValue;
  }
  function handlerSearchByArea(e, value) {
    e.preventDefault();
    console.log("SEARCH AREA VALUE :", value);
    if (input !== "" && input.trim() !== "") {
      dispatch(filterBySearchArea(input.trim(), value));
      paginate(1);
    } else {
      alert("Debes especificar un area para que podamos buscar!");
    }
  }

  function handlerRefreshPets(e) {
    e.preventDefault();
    dispatch(getPets(value));
    paginate(1);
  }

  useEffect(() => {}, [dispatch]);

  return (
    <Box bg={"brand.green.200"} pt="1rem">
      <Heading>Mascotas en Adopción</Heading>

      {/* //SearchBar */}

      <Box bg={"brand.green.200"}>
        <Center>
          <Box w='50%' mt={['2rem', '2rem', '3rem']}  ml={['0rem', '0', '0']}>
            <Input h="3rem" variant='filled' bg={'white'} focusBorderColor={"brand.green.300"} type="text" w={['100%', '100%', '60%', '60%']}
              onChange={(e) => handlerInputChange(e)}
              placeholder="Buscar por área..." />


            <Button mt={['1rem', '1rem', '0', '0']} ml={['0rem', '0', '1rem']}
              onClick={(e) => handlerSearchByArea(e, value)}
              fontFamily={"body"}
              w='6rem'
              borderRadius="30px"
              bg={"orange.300"}
              color={"white"}
              borderRadius={"full"}
              _hover={{
                bg: "orange.400",
              }}
            >
              Buscar
            </Button>
          </Box>
        </Center>


        <SimpleGrid w="100%" my={['1rem', '1rem', '1rem']} columns={[2, 2, 4, 4]} spacing='4px'>
          <Center>
            <Box w="60%" my={["0.5rem", "0.5rem", "1rem"]}>
              <FormControl>
                <Center>
                  <FormLabel
                    fontFamily={"heading"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"orange.400"}
                  >
                    Especie
                  </FormLabel>
                </Center>
                <Select
                  focusBorderColor={"brand.green.300"}
                  name="species"
                  id="species"
                  placeholder="-"
                  onChange={(e) => handlerFilterBySpecie(e)}
                >
                  <option value="gato">Gato/a</option>
                  <option value="perro">Perro/a</option>
                </Select>
              </FormControl>
            </Box>
          </Center>

          <Center>
            <Box w="60%" my={["0.5rem", "0.5rem", "1rem"]}>
              <FormControl>
                <Center>
                  <FormLabel
                    fontFamily={"heading"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"orange.400"}
                  >
                    Sexo
                  </FormLabel>
                </Center>
                <Select
                  focusBorderColor={"brand.green.300"}
                  name="sex"
                  id="sex"
                  onChange={(e) => handlerFilterBySex(e)}
                  placeholder="-"
                >
                  <option value="hembra">Hembra</option>
                  <option value="macho">Macho</option>
                </Select>
              </FormControl>
            </Box>
          </Center>

          <Center>
            <Box w="60%" my={["0.5rem", "0.5rem", "1rem"]}>
              <FormControl>
                <Center>
                  <FormLabel
                    fontFamily={"heading"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"orange.400"}
                  >
                    Edad
                  </FormLabel>
                </Center>
                <Select
                  focusBorderColor={"brand.green.300"}
                  name="age"
                  id="age"
                  onChange={(e) => handlerFilterByAge(e)}
                  placeholder="-"
                >
                  <option value="cachorro">Cachorro/a</option>
                  <option value="joven">Joven</option>
                  <option value="adulto">Adulto/a</option>
                </Select>
              </FormControl>
            </Box>
          </Center>

          <Center>
            <Box w="60%" my={["0.5rem", "0.5rem", "1rem"]}>
              <FormControl>
                <Center>
                  <FormLabel
                    fontFamily={"heading"}
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"orange.400"}
                  >
                    Tamaño
                  </FormLabel>
                </Center>
                <Select
                  name="size"
                  focusBorderColor={"brand.green.300"}
                  id="size"
                  onChange={(e) => handlerFilterBySize(e)}
                  placeholder="-"
                >
                  <option value="pequeño">Pequeño</option>
                  <option value="mediano">Mediano/a</option>
                  <option value="grande">Grande</option>
                </Select>
              </FormControl>
            </Box>
          </Center>
        </SimpleGrid>

        <SimpleGrid w="100%" pb="2rem">
          <Center>
            <Button w='5rem' mx='1rem' borderRadius="30px"
              className="selectsFilter"
              onClick={(e) => handlerFilterButton(e)}
              fontFamily={"body"}
              size="md"
              bg={"orange.300"}
              borderRadius={"full"}
              color={"white"}
              _hover={{
                bg: "orange.400",
              }}
            >
              Filtrar
            </Button>

            <Button w='5rem' borderRadius="30px"
              className="selectsFilter"
              onClick={(e) => handlerRefreshPets(e)}
              fontFamily={"body"}
              size="md"
              bg={"orange.300"}
              borderRadius={"full"}
              color={"white"}
              _hover={{
                bg: "orange.400",
              }}
            >
              Todos
            </Button>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default FilterBar;
