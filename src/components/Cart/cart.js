import { useContext } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { CartContext } from "../../Context/CartContext"

const Cart =()=>{

    const{cart,cartTotal,emptyCart}=useContext(CartContext)

    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>

            <h1>MI CARRITO!</h1>
            {cart.map((item)=>(
                <div key={item.cod_articulo}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: U$S {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Talle: {item.talle}</p>
                    <p>Codigo: {item.cod_articulo}</p>
                    <hr/>
                </div>

            ))}
            <h3>Total: U$S{cartTotal()}</h3>
            <button onClick={emptyCart} className="botonAgregar">Vaciar Carrito</button>
        </div>
    )
}

export default Cart