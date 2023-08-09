import React from "react";
import { useState } from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";

const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <ButtonGroup mt="1" gap="4" mr="20px">
        <Button
          bg="white"
          size="sm"
          variant="solid"
          color="a64e73"
          onClick={sumar}
        >
          +
        </Button>
        <Box>{contador}</Box>
        <Button
          bg="white"
          size="sm"
          variant="solid"
          color="black"
          onClick={restar}
        >
          -
        </Button>
      </ButtonGroup>
    </>
  );
};
export default ItemCount;
