import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Cart from './components/Cart'
import Contacto from './components/Contacto'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShoppingCartContext from './context/ShoppingCartContext'


const App = () => {
  
  return (
 <>

    <ShoppingCartContext>
    </ShoppingCartContext>

  <BrowserRouter>
       <NavBar />

  <Routes>

        
        <Route exact path="/" element={<Home />} />           
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/catalogo" element={<ItemListContainer />} />

  </Routes>



  </BrowserRouter>

 </> 
  )
}

export default App
