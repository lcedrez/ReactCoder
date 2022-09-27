import NavBar from '../NavBar/NavBar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/img/LogoStoreUy.jpg'
import { Link } from 'react-router-dom';
import { useLoginContext } from '../../Context/LoginContext';
import {faArrowRight, faArrowRightFromBracket, faGears, faUserCircle, faUserGear} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


import './header.css'
import { faGear } from '@fortawesome/free-solid-svg-icons';

const Header=()=>{

    const {user,logout}=useLoginContext()

    return(
        <header className="HeaderApp">  
                
        <div className='navContainer'>
          <CartWidget/>
            <NavBar/>
            <div className='logo'>
               <Link to='/'> <img src={Logo} alt="Logo" /></Link>
            </div>
          
        </div>
        <div className='containerUsuario'>
            
                    <FontAwesomeIcon className='userIcon'  icon={faUserCircle}/>
            <small className='titBienvenido'>Bienvenido , <span className='mailUser'>{user.user}</span></small>
            
                <FontAwesomeIcon className='settingIcon'  icon={faGear}/>
                <span className='settings'>Mi Cuenta</span>


             <FontAwesomeIcon className='iconLogout' onClick={logout}  icon={faArrowRightFromBracket}/>
             <span className='logout' onClick={logout}>Logout</span>
        </div>
    </header>

    );

}

export default Header;
