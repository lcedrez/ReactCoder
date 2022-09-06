
import "./itemList.css"

import Item from "../Item/item"


const ItemList=({productos =[]})=>{
   
   
    return(
      
        <div className="Container">
           
            {productos.map((prod) => <Item producto={prod} key={prod.cod_articulo}/>)}
            
        </div>
        
    )
}

export default ItemList
