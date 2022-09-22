import ItemsRelacDet from "./ItemsRelacDet"         
import "./itemRelac.css"
const ItemRelac=({productosRelac =[]})=>{
    return(
      <div>
        <div className="tituloRelac">
            <h1>YOU MIGHT ALSO LIKE</h1>
          </div>
        <div className="ContainerArRelacionados">
           
            {productosRelac.map((prod) => <ItemsRelacDet producto={prod} key={prod.cod_articulo}/>)}
            
        </div>
    </div> 
    )

}

export default ItemRelac