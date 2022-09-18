
import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';
import { useState } from "react"
import Select from "../Select/select";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import Item from "../Item/item";






const ItemDetail=({item})=>{

    const {cart,addToCart,ExisteEnCarrito}=useContext(CartContext)
    const[cantidad,setCantidad]=useState(1)
  
    //creo este If para saber si tiene talle
    if(item.hasOwnProperty("talles"))
    {
        console.log("tiene")
    }
    else{
        console.log("NO tiene")
    }
    const [talle, setTalle] = useState(item.talles[0].value)
   



    const handleAgregar=()=>{
        const itemToCart={
            cod_articulo:item.cod_articulo,
            precio:item.precio,
            nombre:item.nombre,
            descripcion:item.descripcion,
            imagen:item.imagen,
            cantidad,
            talle
        }
        ExisteEnCarrito(item.cod_articulo)
        ? Swal.fire({
            icon: 'warning',
            text: 'Articulo ya agregado!!',
            
          })
        : addToCart(itemToCart)

        
       
    }

    return(
        <div className="Container">
           
            
            
        <div className="contenedorDetalle" key={item.cod_articulo}>
          
                   <div className="contenedorImgDetalle">
                      <img src={item.imagen} ></img>
                   </div>  
                       <div className="contenedorDetalleDerecha">
                           <h2 className="tituloDetalle">{item.nombre}</h2>

                           <p className="precioDetalle">U$S {item.precio}</p>

                           <Select className="size" options={item.talles} onSelect={setTalle}/>
                           <br/>
                                {

                                    ExisteEnCarrito(item.cod_articulo)
                                    ?  <Link to="/cart" 
                                    className="botonTerminar">Terminar mi Compra
                                    
                                    </Link>
                                    :
                                     <Contador cantStock={item.stock} 
                                    counter={cantidad}
                                    setCounter={setCantidad}
                               /> 
                                }
                               <div className="cantStock">
                               <br/> 
                    <p>Stock: {item.stock}</p>
            </div>
            <br/>   
        
            <div className="contenedorAgregar">
                

                    <button className="botonAgregar" onClick={handleAgregar}>Add To Cart</button>
                
            </div>
        
            <br/>   
            <div className="contenedorDescripcion">
                <p>{item.descripcion}</p>
            </div>
                              
                              
                       </div> 
               </div>
           
       

   </div>
    )
}
export default ItemDetail


