import React from 'react'
import ItemList from './ItemList'
import {Box} from '@chakra-ui/react'
import {useParams} from 'react-router-dom'


const ItemListContainer = () => {
  const {categoria} = useParams()
  const productos = [
    { id: 1, nombre: "Producto 1", descripcion: "lorem ipsun", precio: 2500, stock: 10, categoria: "manga"},
    { id: 2, nombre: "Producto 2", descripcion: "lorem ipsun", precio: 5000, stock: 10, categoria: "manga" },  
    { id: 3, nombre: "Producto 3", descripcion: "lorem ipsun", precio: 5000, stock: 20, categoria: "libro" },  
    { id: 4, nombre: "Producto 4", descripcion: "lorem ipsun", precio: 2500, stock: 10, categoria: "manga" },
    { id: 5, nombre: "Producto 5", descripcion: "lorem ipsun", precio: 2500, stock: 5, categoria: "libro" },
    { id: 6, nombre: "Producto 6", descripcion: "lorem ipsun", precio: 2500, stock: 3, categoria: "manga"}  
    
]

const getProductos = new Promise((resolve, reject) => {   
    if (productos.length > 0) {
         setTimeout(() => {
            resolve(productos)              
        }, 2000)
    } else {
      reject(new Error("No hay datos"))
    } 
})

getProductos
.then ((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)

})


const filtroProd = productos.filter((producto) => producto.categoria === categoria)



  return (
    <Box>
      <ItemList productos={filtroProd} />
    </Box>
  )
}

export default ItemListContainer;
