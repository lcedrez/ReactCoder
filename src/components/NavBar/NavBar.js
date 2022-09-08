import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar =()=> {
    return(
    <div className='navContenedor'>
        <div class="topnav">
            <Link to='/'>Inicio</Link>
            <Link to='/Articulo/Outlet'>Beatles Outlet</Link>
            <Link to='/Articulo/Media'>Media</Link>
            <Link to='/Articulo/Toy'>Toys and Games</Link>
            <Link to='/Articulo/Home'>Home</Link>
            <Link to='/Articulo/Accesories'>Accesories</Link>
            <Link to='/Articulo/Outfit'>Outfit</Link>
        </div>
    </div>
    )

}

export default NavBar;