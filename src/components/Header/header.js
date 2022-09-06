import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/LogoStoreUy.jpg'
import { Link } from 'react-router-dom';

const Header=()=>{

    return(
        <header className="HeaderApp">  
                
        <div className='navContainer'>
          <CartWidget/>
            <NavBar/>
            <div className='logo'>
               <Link to='/'> <img src={Logo} alt="Logo" /></Link>
            </div>
          
        </div>
    </header>

    );

}

export default Header;
