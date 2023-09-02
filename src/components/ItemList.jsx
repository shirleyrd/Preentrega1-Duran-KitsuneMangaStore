import React from 'react'
import Item from './Item'
import { Flex } from '@chakra-ui/react'


const ItemList = ({productos}) => {
 return ( 
   <Flex justifyContent={'space-evenly'}>
       {productos.map((p) => {
          return(           
             <Item
                  key = {p.id}
                  id = {p.id} 
                  nombre = {p.nombre}
                  descripcion = {p.descripcion}
                  imagen = {p.imagen} 
                  precio = {p.precio}                 
                  categoria = {p.categoria} />
   
         )
      })}      
   </Flex>
 )
}

export default ItemList
