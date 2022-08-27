
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './components/CartWidget/CartWidget'; 
import Logo from './assets/img/LogoStoreUy.jpg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Contador from './components/Contador/ItemCounts';


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
      <div className='contenedorTitulo'>
            <ItemListContainer/>
            <Contador/>
      </div>
    
        
      </header>

    </div>

  );
}

export default App;
