import React from 'react';
import { Flex, Box, Spacer } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex className="navegador" maxH="210px" mb="20px">
      <Box p="4" pb="4" bg="#741974" color="white" fontSize="30px">
        <Link to={"/"}>Kitsune Manga Store</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#571357" color="white">
        <Link to={"/catalogo"}>CATÁLOGO</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#571357" color="white">
        <Link to={`/categoria/${"manga"}`}>MANGA</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#571357" color="white">
        <Link to={`/categoria/${"comic"}`}>COMICS</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#571357" color="white">
        <Link to={"/contacto"}>CONTACTO</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#571357" color="white">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
