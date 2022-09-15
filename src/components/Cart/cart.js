import { useContext } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { CartContext } from "../../Context/CartContext"
import './cart.css'

const Cart =()=>{

    const{cart,cartTotal,emptyCart}=useContext(CartContext)
    console.log(cart)
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="tituloCarrito">
                <h1>MI CARRITO!</h1>
            </div>
            <br/>
            <br/>
         
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