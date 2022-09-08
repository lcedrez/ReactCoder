import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';

const CartWidget = ()=>{
    return(
        <div className='contenedorCarrito'>
        <FontAwesomeIcon icon={faCartShopping}/>
            <div className='contPadreItem'>
                <div className='contItem'>
                    <span>0</span>
                </div>
            </div>
        </div>
    )
}

export default CartWidget;