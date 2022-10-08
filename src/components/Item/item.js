import { Link } from 'react-router-dom';




const   Item=({producto})=>{
       
if(producto.stock===0)
{
        return( 
                <div className="cardContainerStock" >
                        
                        <img src={producto.imagen}/>
                                <div className='contenedorNombPrec'>
                                        <div  className='contenCardTitStock'>
                                                <h2 className="tituloCardStock">{producto.nombre}</h2>
                                        
                                                <img src='../../../Imagenes/OutStock.jpg'/>
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

