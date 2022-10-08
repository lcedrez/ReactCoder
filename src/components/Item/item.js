import { Link } from 'react-router-dom';




const   Item=({producto})=>{
       
if(producto.stock===0)
{
        return( 
                <div className="cardContainer" >
                        
                        <img className='imgNonStock' src={producto.imagen}/>
                                <div className='contenedorNombPrecStock'>
                                        <div  className='contenCardTitStock'>
                                                <h2 className="tituloCardStock">{producto.nombre}</h2>
                                                        <div className='contenedorNoStock'>   
                                                                <div className='stockOut'>
                                                                        <h6 className='titStock'>OUT OF STOCK!</h6>
                                                                </div>
                                                        </div>
                                        </div>
                                </div>
                        
                       
                </div>
            )   

}
else if(producto.descuento > 0)
{
        const precioDesc=producto.precio
        const desc=precioDesc * producto.descuento/100
        
        return( 
                <div className="cardContainer" >
                               
                        <Link  to={`/item/${producto.cod_articulo}`}><img src={producto.imagen}/></Link> 
                        <div className='contenedorDescuento'>
                                        <span> {producto.descuento}% OFF</span>
                                </div>
                                <div className='contenedorNombPrec'>
                                        <div  className='contenCardTit'>
                                                        <h2 className="tituloCard">{producto.nombre}</h2>
                                                <div className='contPrecDesc'>      
                                                        <span className="precioCardDesc"><del>U$S {precioDesc}</del></span>
                                                      
                                                        <div className='precioFinal'>
                                                                <span>U$S { producto.precio - desc}</span>
                                                        </div>

                                                </div>     
                                        </div>
                                </div>
                        
                       
                </div>
        )

}

    return( 
        <div className="cardContainer" >
                
                <Link  to={`/item/${producto.cod_articulo}`}><img src={producto.imagen}/></Link> 
                        <div className='contenedorNombPrec'>
                                <div  className='contenCardTit'>
                                        <h2 className="tituloCard">{producto.nombre}</h2>
                                        <span className="precioCard">U$S {producto.precio}</span>
                                </div>
                        </div>
                
               
        </div>
    )
}

export default Item

