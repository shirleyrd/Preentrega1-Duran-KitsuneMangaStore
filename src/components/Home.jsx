import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="bienvenido">
      <h1>BIENVENIDOS A MI TIENDA</h1>
    <div className="catalogo">
      <Link className="link-catalogo" to="/catalogo">Ir al Catálogo</Link>
    </div>
    </div>
  );
};

export default Home;
