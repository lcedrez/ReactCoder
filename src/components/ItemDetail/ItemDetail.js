
import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';


const ItemDetail=({item =[]})=>{
   

    return(
      
        <div className="Container">
           
            {item.map((prod) => {
            
            return  <div className="contenedorDetalle" key={prod.cod_articulo}>
               
                        <div className="contenedorImgDetalle">
                           <img src={prod.imagen}></img>
                        </div>  
                            <div className="contenedorDetalleDerecha">
                                <h2 className="tituloDetalle">{prod.nombre}</h2>

                                <p className="precioDetalle">U$S {prod.precio}</p>

                                    <Contador cantStock={prod}/> 
                                    <br/>
                                 
                                        <div className="cantStock">
                                            <p>Stock: {prod.stock}</p>
                                        </div>
                                        <div className="contenedorAgregar">
                                            <button className="botonAgregar">Add To Cart</button>
                                        </div>
                                        <br/>   
                                        <div className="contenedorDescripcion">
                                            <p>{prod.descripcion}</p>
                                        </div>
                            </div> 
                    </div>
                
            })}

        </div>
        
    )
}
        
    


export default ItemDetail
/*
<img src={prod.imagen}></img>
<h4 className="tituloCard">{prod.nombre}</h4>
<p className="precioCard">U$S {prod.precio}</p>
<small>Stock:{prod.stock}</small>
<div className="contenedorAgregar">
    <button className="botonAgregar">Ver Detalle</button>
</div>
*/