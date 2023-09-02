import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const prodRef = doc(db, "productos", id);

    getDoc(prodRef)
      .then((res) => {
        if (res.exists()) {
          setProducto({ ...res.data(), id: res.id });
        } else {
          console.log("El producto no fue encontrado");
        }
      })
      .catch((error) => {
        console.error("Error obteniendo documento:", error);
      });
  }, [id]);

  return (
    <div>
      {producto ? <ItemDetail producto={producto} /> : <p>Cargando...</p>}
    </div>
  );
};

export default ItemDetailContainer;