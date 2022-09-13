
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/footer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PieDePagina from './components/pieDePagina/pieDePagina';
import Header from './components/Header/header';
import Outlet from './components/outlet/outlet';
import Home from './components/Home/Home';
import Accesories from './components/Accesories/Accesories';
import Media from './components/Media/Media';
import ToysAndGames from './components/ToysAndGames/ToysAndGames';
import Outfit from './components/Outfit/outfit';
import Cart from './components/Cart/cart';
import  {CartContext } from './Context/CartContext';
import { useState } from 'react';


const App = ()=> {

  const[cart,setCart]=useState([])

  const addToCart=(item)=>{
    setCart([...cart,item])

  }

  const ExisteEnCarrito=(cod_articulo)=>{
    return cart.some((item)=> item.cod_articulo===cod_articulo)
  }

  return (
    <CartContext.Provider value={{

      cart,
      addToCart,
      ExisteEnCarrito
    }}>
        <BrowserRouter>


              <div className="App">
              
              <Header/>
              
                  <Routes>
                    <Route path='/' element={ <ItemListContainer/> }/>
                    <Route path='/Cart' element={<Cart/>}/>
                    <Route path='/item/:cod_articulo' element={<ItemDetailContainer />}/>
                    <Route path='/Articulo/:categoria' element={<ItemListContainer/>}/>
                    <Route path="/Outlet" element={<Outlet/>}/>
                    <Route path="/Media" element={<Media/>}/>
                    <Route path="/Toy" element={<ToysAndGames/>}/>
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Outfit" element={<Outfit/>}/>
                    <Route path="/Accesories" element={<Accesories/>}/>
                  </Routes>
                
                    <br/>
                    <br/>
                    <br/>

                  <Footer/>
                  <PieDePagina/>
                  
            </div>
        </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
