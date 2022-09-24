import { useContext } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClockRotateLeft}  from '@fortawesome/free-solid-svg-icons';
import {faTrash}  from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../Context/CartContext"
import { Link } from 'react-router-dom';
import './cart.css';
import ContadorCarrito from "../Contador/ContadorCarrito";
import { useState } from "react";

const Cart =()=>{

    const{cart,cartTotal,emptyCart,itemsEnCarrito,cartTotalActualiza,eliminarItem}=useContext(CartContext)
    const[cantidad,setCantidad]=useState(1)
  
    if(cart.length===0){
        return(
            <div>
                <br/>
            <br/>
            <br/>
            <br/>
            
            
         
                <div className="contPadreVacio">
                    <div className="contenedorCarritoVacio">
                            <h1 className="titCartVac">¡Hay un carrito que llenar!</h1>
                                <strong>Actualmente no tenés productos en tu carrito.</strong>
                                    <p>Buscá entre miles de productos que nosotros los llevamos a tu puerta con hasta 18 cuotas sin interés</p>
                                        <div className="contenBotonComprar">
                                        <Link  to={`/`}> 
                                            <button className="botonAgregar">Buscar Productos</button>
                                        </Link>
                                        </div>
                    </div>
                </div>  

                <div className="contenedorTarjetas">
                    <img src="../../../Imagenes/Tarjetas.png"></img>
                </div>  
            </div>
        )
    }
    
   
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
                                        <em className="size">Size: {item.talle}</em>
                                    </li>
                                        <li>
                                            <em className="cantidad">Cant: {item.cantidad}</em>
                                        </li>
                                            <li>
                                                <em className="precDet">U$S {item.precio}</em>
                                            </li>
                                            <li>
                                                <em className="precDet">stock {item.stock}</em>
                                            </li>
                                            
                                            
                                            
                            </ul>
                           
                            </div>
                                <div className="contadorEliminar">
                                    <ContadorCarrito cantStock={item.stock} counter={cantidad} setCounter={setCantidad} cod_articulo={item.cod_articulo} />
                                        <FontAwesomeIcon className="trash" icon={faTrash} onClick={()=>eliminarItem(item.cod_articulo)}/>
                                </div>
                            <hr/>
                        </div>
                    </div>
                </div>

            ))}
            <div className="totales">
            <h3>Total: U$S{cartTotalActualiza({cantidad})}</h3>
            <button onClick={emptyCart} className="botonAgregar">Vaciar Carrito</button>
            <Link className="btn btn-success mx-3" to="/Checkout">Terminar Mi Compra</Link>
            </div>
        </div>
    )
}

export default Cart