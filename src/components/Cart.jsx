import React from 'react'
import {
  Container,
  Heading,
  Text,
  Button,
  Link as ChakraLink,
  VStack,
  Box,
  Image
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext' 
import {useContext} from 'react'

const Cart = () => {

  const { cart, precioTotal, emptyCart } = useContext(CartContext);

  const handleVaciar = () => {
    emptyCart();
}
  return (
    <Container maxW="container.sm" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={4}>
        Carrito
      </Heading>

      {cart.map((prod) => (
        <Box key={prod.id} borderWidth="1px" p={4} borderRadius="md" mb={4}>
          <Image src={prod.imagen} borderRadius="lg" alt={prod.nombre} />
          <Text fontSize="lg" fontWeight="bold">
            {prod.nombre}
          </Text>
          <Text>Precio unit: ${prod.precio}</Text>
          <Text>Precio total: ${prod.precio * prod.cantidad}</Text>
          <Text>Cant: {prod.cantidad}</Text>
        </Box>
      ))}

      {cart.length > 0 ? (
        <VStack spacing={4}>
          <Text fontSize="lg" fontWeight="bold">
            Precio total: ${precioTotal()}
          </Text>
          <Button colorScheme="red" onClick={handleVaciar}>
            Vaciar
          </Button>
          <ChakraLink as={Link} to="/checkout" fontSize="lg">
            Finalizar compra
          </ChakraLink>
        </VStack>
      ) : (
        <Text fontSize="lg">El carrito está vacío</Text>
        
      )}
    </Container>
  )
}
  

export default Cart
