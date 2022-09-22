import { Link } from 'react-router-dom';
import "./ItmeRelacDet.css"

const ItemsRelacDet=({producto})=>{
console.log(producto)

    return(
       
          
            <div className="cardContainerRelac" >
                    
                    <Link  to={`/item/${producto.cod_articulo}`}><img src={producto.imagen}/></Link> 
                            <div className='contenedorItemRelac'>
                                    <div  className='contenCardTitRelac'>
                                            <h2 className="tituloCardRelac">{producto.nombre}</h2>
                                            <span className="precioCardRelac">U$S {producto.precio}</span>
                                    </div>
                            </div>
                    
                
            </div>
        
    )
}

export default ItemsRelacDet