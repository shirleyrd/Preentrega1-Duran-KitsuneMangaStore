import React from "react";
import { Link, Flex, Box, Spacer, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Flex className="navegador">
      <Box p="4" bg="#c3829e" color="white">
        <Text fontSize={25}>Kitsune Manga Store</Text>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link>HOME</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link>NOVEDADES</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link>MANGA</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link>LIBROS</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link>CONTACTO</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <CartWidget />
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
