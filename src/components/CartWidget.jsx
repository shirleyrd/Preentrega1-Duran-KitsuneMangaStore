import React from "react";
import { Flex, Box } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex>
      <span className="material-symbols-outlined">shopping_cart</span>
      <Box>
        <p>3</p>
      </Box>
    </Flex>
  );
};

export default CartWidget;
