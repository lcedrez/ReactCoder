
import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';
import { useState } from "react"
import Select from "../Select/select";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";






const ItemDetail=({item})=>{

    const {cart,addToCart,ExisteEnCarrito}=useContext(CartContext)
    const[cantidad,setCantidad]=useState(1)
    const [talle, setTalle] = useState(item.talles[0].value)
    const [botonActivo,setBotonActivo]=useState(true);

    const handledisabledBtn=()=>{
        return(
            false
        )
    }


    const handleAgregar=()=>{
        const itemToCart={
            cod_articulo:item.cod_articulo,
            precio:item.precio,
            nombre:item.nombre,
            descripcion:item.descripcion,
            cantidad,
            talle
        }
       console.log( ExisteEnCarrito(item.cod_articulo))
        addToCart(itemToCart)
        console.log(cart)
       
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

                           <Select options={item.talles} onSelect={setTalle}/>

                               <Contador cantStock={item.stock} 
                               counter={cantidad}
                               setCounter={setCantidad}
                               /> 
                               <br/>
                            
                                   <div className="cantStock">
                                       <p>Stock: {item.stock}</p>
                                   </div>
                                  
                                   <div className="contenedorAgregar">
                                        
        
                                            <button className="botonAgregar" disabled={!botonActivo} onClick={handleAgregar}>Add To Cart</button>
                                        
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


