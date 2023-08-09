import React from 'react'
import ItemCount from './ItemCount'
import {useParams} from 'react-router-dom'
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, Text, Center, Image, Flex } from '@chakra-ui/react'


const ItemDetail = ({ productos }) => {
  const {id} = useParams();
  console.log(productos)

  const filtroProd = productos.filter((producto) => producto.id == id)

  return (
    <div>
        {filtroProd.map((p) => {
          return (
            <div key={p.id}>
            <Center>

              <Card maxW="40%" mt ="50px" size="lg" bg="#c17c99" >
                  <CardHeader>
                    <Heading size='lg'>{p.nombre}</Heading>
                  </CardHeader>
                  <CardBody>
                  <Flex justifyContent="center" alignItems="center" mb="12px">
                  <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg" maxW="70%"
          />
          </Flex>
                    <Text fontSize="md">{p.descripcion}</Text>                    
                    <Text color="black" fontSize="2xl">${p.precio}</Text>
                    <Text as="i" fontSize="sm">{p.categoria}</Text>
                  </CardBody>
                  <CardFooter>
                    <ItemCount />
                    <Button>Añadir</Button>
                  </CardFooter>
                </Card>
              </Center>            
             </div> 
          )
      })}    
   </div>        
              
  )

}



export default ItemDetail;
