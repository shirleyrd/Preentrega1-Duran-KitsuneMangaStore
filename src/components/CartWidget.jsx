import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { CartContext } from '../context/CartContext'
import {useContext} from 'react'

const CartWidget = () => {

  const { cartAmount } = useContext(CartContext); 
  return (
    <Flex>
    <span className="material-symbols-outlined">shopping_cart</span>
    <Box>
      <p>{cartAmount()}</p>
    </Box>
  </Flex>
);
};
export default CartWidget;
