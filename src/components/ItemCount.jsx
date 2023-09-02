import React, { useState } from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

const ItemCount = ({ handleAgregar }) => {
  const [cantidad, setCantidad] = useState(0);

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    
    setCantidad(cantidad + 1);
  };

  return (
    <Flex direction="column" align="center" p="4" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Flex justify="center" align="center" mb="4">
        <Button
          size="sm"
          variant="outline"
          colorScheme="teal"
          onClick={handleRestar}
        >
          -
        </Button>
        <Text fontSize="xl" mx="4">
          {cantidad}
        </Text>
        <Button
          size="sm"
          variant="outline"
          colorScheme="teal"
          onClick={handleSumar}
        >
          +
        </Button>
      </Flex>
      <Button
        size="sm"
        colorScheme="teal"
        onClick={() => handleAgregar(cantidad)}
      >
        Agregar al carrito
      </Button>
    </Flex>
  );
};

export default ItemCount;