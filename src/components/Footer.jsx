import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaPhone, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#741974" color="white" py="4">
      <Flex justifyContent="space-evenly">
       
        <Box>
          <Text fontSize="lg" fontWeight="bold">Dirección:</Text>
          <Text>123 Calle Principal</Text>
          <Text>Ciudad, País</Text>
          <Text fontSize="lg" fontWeight="bold">Teléfono:</Text>
          <Text><Icon as={FaPhone} mr="2" />+123 456 789</Text>
        </Box>

        
        <Box>
          <Text fontSize="lg" fontWeight="bold">WhatsApp:</Text>
          <Text><Icon as={FaWhatsapp} mr="2" />+123 456 789</Text>
        </Box>

        
        <Box>
          <Text fontSize="lg" fontWeight="bold">Redes Sociales:</Text>
          <Link href="#" isExternal><Icon as={FaFacebook} fontSize="xl" mr="2" /></Link>
          <Link href="#" isExternal><Icon as={FaTwitter} fontSize="xl" mr="2" /></Link>
          <Link href="#" isExternal><Icon as={FaInstagram} fontSize="xl" mr="2" /></Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;