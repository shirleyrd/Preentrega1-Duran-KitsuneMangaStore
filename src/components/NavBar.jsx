import React from "react";
import { Flex, Box, Spacer, Text } from "@chakra-ui/react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex className="navegador" maxH="210px" mb="20px">
      <Box p="4" bg="#c3829e" color="white" fontSize="25px">
        <Link to={"/"}>Kitsune Manga Store</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link to={"/Noticias"}>NOTICIAS</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link to={`/categoria/${"manga"}`}>MANGA</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link to={`/categoria/${"libro"}`}>LIBROS</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link to={"/contacto"}>CONTACTO</Link>
      </Box>
      <Spacer />
      <Box m="1" p="4" bg="#562135" color="white">
        <Link to={"/cart"}>
          <CartWidget />
        </Link>
      </Box>
      <Spacer />
    </Flex>
  );
};

export default NavBar;
