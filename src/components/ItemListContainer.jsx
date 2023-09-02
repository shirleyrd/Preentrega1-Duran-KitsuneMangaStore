import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Flex } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import Loading from './Loading'


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, 'productos');
    const q = categoria ? query(productosRef, where('categoria', '==', categoria)) : productosRef;

    getDocs(q)
      .then((res) => {
        const fetchedProductos = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setProductos(fetchedProductos);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      },600);
  }, [categoria]);

  if (loading) {
    return <Loading />; 
  }

  return (
    <Flex>
      <ItemList productos={productos} />
    </Flex>
  );
};

export default ItemListContainer;