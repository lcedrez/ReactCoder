
import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';


const ItemDetail=({item})=>{

    return(
        <div className="Container">
           
            
            
        <div className="contenedorDetalle" key={item.cod_articulo}>
          
                   <div className="contenedorImgDetalle">
                      <img src={item.imagen} ></img>
                   </div>  
                       <div className="contenedorDetalleDerecha">
                           <h2 className="tituloDetalle">{item.nombre}</h2>

                           <p className="precioDetalle">U$S {item.precio}</p>

                               <Contador cantStock={item}/> 
                               <br/>
                            
                                   <div className="cantStock">
                                       <p>Stock: {item.stock}</p>
                                   </div>
                                   <div className="contenedorAgregar">
                                       <button className="botonAgregar">Add To Cart</button>
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


