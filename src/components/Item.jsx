import React from "react";
import {
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Image,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, categoria, imagen }) => {
  return (
    <Flex
      className="card"
      flexWrap="wrap"
      justifyContent="center"
      gap={4}
      p={4}
      mx="auto"
      minWidth="max-content"
      maxWidth="500px"
    >
      <Center>
        <Card maxW="sm">
          <Image
            src={imagen}
            borderRadius="lg"
            alt={nombre}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <CardBody alignContent="center" bg="#d3a3b8" p={4}>
            <Stack spacing="">
              <Heading color="black" size="md">
                {nombre}
              </Heading>
              <Text>Precio ${precio}</Text>
              <Text>{categoria}</Text>
            </Stack>
          </CardBody>
          <CardFooter bg="#562135" p={4}>
            <Button
              size="md"
              align="center"
              bg="beige"
              variant="solid"
              color="a64e73"
            >
              <Link to={`/item/${id}`}>Detalles</Link>
            </Button>
          </CardFooter>
        </Card>
      </Center>
    </Flex>
  );
};

export default Item;
