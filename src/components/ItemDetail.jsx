import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { Box,  Heading, Text, Image, Flex } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto}) => {
  const { addCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
    
  };

  const handleSumar = () => {
    cantidad < producto.cantidad && setCantidad(cantidad + 1);
  };

  const handleAgregar = () => {
    
    addCart(producto, cantidad);
  };

  return (
    <Flex justify="center" align="center" mt="4">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="lg">
        <Image src={producto.imagen} alt={producto.nombre} maxWidth="100%" />
        <Box p="4">
          <Heading as="h2" size="lg">
            {producto.nombre}
          </Heading>
          <Text fontSize="lg" mt="2" color="#B76789">
            Precio: ${producto.precio}
          </Text>
          <Text fontSize="md" mt="2">
            Categoría: {producto.categoria}
          </Text>
          <Text fontSize="md" mt="2" className="descripcion">
            {producto.descripcion}
          </Text>
          <ItemCount
            cantidad={cantidad}
            handleRestar={handleRestar}
            handleSumar={handleSumar}            
            handleAgregar={() => {
              addCart(producto, cantidad); 
            }}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export default ItemDetail;