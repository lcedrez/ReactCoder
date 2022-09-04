
import "./itemList.css"


const ItemList=({productos =[]})=>{
   
   
    return(
      
        <div className="Container">
           
            {productos.map((prod) => {
            
            return  <div className="cardContainer" key={prod.cod_articulo}>
                             <img src={prod.imagen}></img>
                            <h4 className="tituloCard">{prod.nombre}</h4>
                            <p className="precioCard">U$S {prod.precio}</p>
                            <small>Stock:{prod.stock}</small>
                            <div className="contenedorAgregar">
                                <button className="botonAgregar">Ver Detalle</button>
                            </div>
                    </div>
                    
            })}

        </div>
        
    )
}

export default ItemList