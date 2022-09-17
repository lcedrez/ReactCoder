import { useContext } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClockRotateLeft}  from '@fortawesome/free-solid-svg-icons';
import {faTrash}  from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom';
import './cart.css'

const Cart =()=>{

    const{cart,cartTotal,emptyCart,itemsEnCarrito,eliminarItem}=useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="tituloCarrito">
            <h1><FontAwesomeIcon icon={faClockRotateLeft} />  PEDIDO EN CURSO</h1>
                
            </div>
            <br/>
            <br/>
                <div className="carritoDetallesIt">
                    
                    <h3 className="tituloMiCarrito">MI CARRITO <span>({itemsEnCarrito() } Item)</span></h3>
                    <Link  to={`/`}> 
                    <h6 className="titSeguirComp">Continúa Comprando</h6>
                    </Link>
                    
                </div>
            {cart.map((item)=>(
                <div key={item.cod_articulo}>
                   
                    <div className="contenedorDetCart">
                        <div className="contImgCart">
                            <img src={item.imagen} ></img>
                        </div>
                        <div className="containerTodoDetalle">
                            <p className="nomDetCart">{item.nombre}</p>
                            <div className="contDetGral">
                            <ul className="itemListado"> 
                                <li>
                                    <em className="sku">Sku: {item.cod_articulo}</em>
                                </li>
                                    <li>
                                        <em className="size">Size: {item.talle}</em>
                                    </li>
                                        <li>
                                            <em className="cantidad">Cant: {item.cantidad}</em>
                                        </li>
                                            <li>
                                                <em className="precDet">U$S {item.precio}</em>
                                            </li>
                                            
                            </ul>
                           
                            </div>
                            <FontAwesomeIcon className="trash" icon={faTrash} onClick={()=>eliminarItem(item.cod_articulo)}/>
                            <hr/>
                        </div>
                    </div>
                </div>

            ))}
            <div className="totales">
            <h3>Total: U$S{cartTotal()}</h3>
            <button onClick={emptyCart} className="botonAgregar">Vaciar Carrito</button>
            </div>
        </div>
    )
}

export default Cart