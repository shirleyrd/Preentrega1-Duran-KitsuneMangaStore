import React, { useState } from 'react';
import { Container, Heading, FormControl, Input, Button, RadioGroup, Radio, Stack, Box, Center} from '@chakra-ui/react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Checkout = ({ cart, precioTotal, handleEmptyCart }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [idOrder, setIdOrder] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('tarjeta-credito')

  const [compraExitosa, setCompraExitosa] = useState(false);

  const db = getFirestore();
  const orderCollection = collection(db, 'orden');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !direccion || !telefono) {
      
      toast.error('Por favor, completa todos los campos correctamente.');
      return;
    }

    const order = {
      nombre: nombre,
      email: email,
      direccion: direccion,
      telefono: telefono,
    };

    addDoc(orderCollection, order)
      .then(({ id }) => {
        setIdOrder(id);
        setCompraExitosa(true)
        
        toast.success(`¡Compra exitosa! ${nombre} Tu número de pedido es: ${id}  ¡Gracias por elegirnos!` );
      });
  };

  return (
    <Container maxW="container.sm" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={4}>
        Finalizar compra
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <Input
            type="text"
            placeholder="Ingresá tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ borderColor: '#ff1493' }} 
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="email"
            placeholder="Ingresá tu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderColor: '#ff1493' }} 
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="text"
            placeholder="Ingresá la dirección donde querés recibir tu pedido"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            style={{ borderColor: '#ff1493' }} 
          />
        </FormControl>
        <FormControl mb={4}>
          <Input
            type="tel"
            placeholder="Ingresá tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            style={{ borderColor: '#ff1493' }} 
          />
        </FormControl>
        <FormControl as="fieldset">
          
<RadioGroup
  name="paymentMethod"
  value={paymentMethod}
  onChange={(value) => setPaymentMethod(value)}
>
  <Stack direction="row" spacing={2}>
    <Box>
      <Radio colorScheme= "pink" value="tarjeta-credito">Tarjeta de Crédito</Radio>
    </Box>
    <Box>
      <Radio colorScheme= "pink" value="tarjeta-debito">Tarjeta de Débito</Radio>
    </Box>
  </Stack>
</RadioGroup>
        </FormControl>     
        
        <Center>
  <Button type="submit" colorScheme="pink">
    Comprar
  </Button>
</Center>
      </form>
      <ToastContainer
        position="center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      
    </Container>
  );
};


export default Checkout;