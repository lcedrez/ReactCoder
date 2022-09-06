

const Item=({producto})=>{
console.log(producto)
    return( 
        <div className="cardContainer" key={producto.cod_articulo}>
                        <img src={producto.imagen}></img>
                <h4 className="tituloCard">{producto.nombre}</h4>
                <p className="precioCard">U$S {producto.precio}</p>
                <small>Stock:{producto.stock}</small>
                <div className="contenedorAgregar">
                        <button className="botonAgregar">Ver Detalle</button>
                </div>
        </div>
    )
}

export default Item