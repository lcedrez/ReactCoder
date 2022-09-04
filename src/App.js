
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget'; 
import Logo from './assets/img/LogoStoreUy.jpg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/footer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TituloInicio from './components/Titulos/tituloInicio';
import PieDePagina from './components/pieDePagina/pieDePagina';
import LogoNav from './components/Logo/LogoNav';

const App = ()=> {
  return (
   
    <div className="App">
       <BrowserRouter>

         

            <header className="HeaderApp">  
            
            <div className='navContainer'>
              <CartWidget/>
                <NavBar/>
                <div className='logo'>
                    <img src={Logo} alt="Logo" />
                </div>
              
            </div>
          </header>
          
          <TituloInicio/>
          
          <Routes>

          </Routes>
                            
            <br/>
            <br/>
            <br/>
          <ItemDetailContainer/>
          <Footer/>
          <PieDePagina/>
          </BrowserRouter>
    </div>

  );
}

export default App;
