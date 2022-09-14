import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartWidget = ()=>{

    const {itemsEnCarrito}=useContext(CartContext)
    console.log(itemsEnCarrito)

    return(
        <div className='contenedorCarrito'>
           <Link  to={`/Cart`}>
                <FontAwesomeIcon icon={faCartShopping}/>
            </Link> 
            <div className='contPadreItem'>
                <div className='contItem'>
                    <span>{itemsEnCarrito()}</span>
                </div>
            </div>
       
        </div>
    )
}

export default CartWidget;