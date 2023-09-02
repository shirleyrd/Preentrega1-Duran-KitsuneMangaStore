import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'


const ItemList = ({productos}) => {
 return ( 
   <Flex justifyContent={'space-evenly'}  flexWrap="wrap" >
       {productos.map((p) => {
          return(           
             <Item 
                  key = {p.id}
                  id = {p.id} 
                  nombre = {p.nombre}
                  descripcion = {p.descripcion}
                  imagen = {p.imagen} 
                  precio = {p.precio}                 
                  categoria = {p.categoria}
                  w="100px"
                  h="200px" />
   
         )
      })}      
   </Flex>
 )
}

export default ItemList
