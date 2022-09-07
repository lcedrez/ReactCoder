import { Link } from 'react-router-dom';




const Item=({producto})=>{
console.log(producto)
    return( 
        <div className="cardContainer">
                        <img  src={producto.imagen}></img>
                <h4 className="tituloCard">{producto.nombre}</h4>
                <p className="precioCard">U$S {producto.precio}</p>
                <small>Stock:{producto.stock}</small>
                <div className="contenedorAgregar">
                        <Link to={`/item/${producto.cod_articulo}`}  className="botonAgregar" >Ver Detalle</Link>
                </div>
        </div>
    )
}

export default Item