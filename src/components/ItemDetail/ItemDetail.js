
import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';
import { useState } from "react"
import Select from "../Select/select";
import { Link } from 'react-router-dom';


const ItemDetail=({item})=>{

    const[cantidad,setCantidad]=useState(1)
    const [talle, setTalle] = useState(item.talles[0].value)

    const handleAgregar=()=>{
        const itemToCart={
            cod_articulo:item.cod_articulo,
            precio:item.precio,
            nombre:item.nombre,
            descripcion:item.descripcion,
            cantidad,
            talle
        }
        console.log(itemToCart)
        
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
                                   <Link  to={`/Cart`}></Link> 
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


