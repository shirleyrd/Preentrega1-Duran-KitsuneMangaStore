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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, descripcion, categoria }) => {
  console.log(id);
  return (
    <div>
      <Card maxW="sm">
        <CardBody alignContent="center" bg="#d3a3b8">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="">
            <Heading color="black" size="md">
              {nombre}
            </Heading>
            <Text>{descripcion}</Text>
            <Text>{categoria}</Text>
          </Stack>
        </CardBody>
        <CardFooter bg="#562135">
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
    </div>
  );
};

export default Item;
