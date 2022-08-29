
const Item=(producto)=>{

    return( <div>
                    <img src={producto.imagen}></img>
                    <h4>{producto.nombre}</h4>
                    <p>Precio:U$S {producto.precio}</p>
                    <small>Stock:{producto.stock}</small>
                    <p>{producto.descripcion}</p>
            </div>
    )
}

export default Item