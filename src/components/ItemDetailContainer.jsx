import React from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const productos = [
    {
      id: 1,
      nombre: "Producto 1",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 2500,
      stock: 10,
      categoria: "manga",
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 5000,
      stock: 10,
      categoria: "manga",
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 5000,
      stock: 20,
      categoria: "libro",
    },
    {
      id: 4,
      nombre: "Producto 4",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 2500,
      stock: 10,
      categoria: "manga",
    },
    {
      id: 5,
      nombre: "Producto 5",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 2500,
      stock: 5,
      categoria: "libro",
    },
    {
      id: 6,
      nombre: "Producto 6",
      descripcion:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit mi nullam sollicitudin, magna et mattis ante justo orci curae ultricies tortor placerat",
      precio: 2500,
      stock: 3,
      categoria: "manga",
    },
  ];

  const getProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      reject(new Error("No hay datos"));
    }
  });

  getProductos
    .then((res) => {})
    .catch((error) => {
      console.log(error);
    });

  return (
    <>
      <ItemDetail productos={productos} />
    </>
  );
};

export default ItemDetailContainer;
