
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget'; 
import Logo from './assets/img/LogoStoreUy.jpg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/ItemCounts';
import Footer from './components/Footer/footer';


const App = ()=> {
  return (
    <div className="App">
      <header className="HeaderApp">  
      
      <div className='navContainer'>
      <CartWidget/>
      <NavBar/>
        <div className='logo'>
          <img src={Logo} alt="Logo" />
        </div>
        
      </div>
     </header>
        <div className='contenedorTitulo'>
            <h1 className="tituloStore" >SHOP THE GET BACK AND LET IT BE COLLECTIONS</h1>
                  <ItemListContainer/>
              
              
        </div>
      <br/>
      <br/>
      <br/>


        <footer>
         <Footer/>
        </footer>
        <div className='pie'>
                <small>&copy; 2022 <b>Apple Records</b> - Todos los Derechos Reservados.</small>
            </div>
    </div>

  );
}

export default App;
