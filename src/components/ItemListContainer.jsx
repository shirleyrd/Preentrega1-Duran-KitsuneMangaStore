import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const ItemListContainer = ({ greeting }) => {
  return (
    <Flex>
      <Box width="100%" bg="#fcd5db">
        <p className="greeting">{greeting}</p>
      </Box>
    </Flex>
  );
};

export default ItemListContainer;
