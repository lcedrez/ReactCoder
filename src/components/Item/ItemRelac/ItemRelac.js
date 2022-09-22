import ItemsRelacDet from "./ItemsRelacDet"         

const ItemRelac=({productosRelac =[]})=>{
    return(
      
        <div className="Container">
           
            {productosRelac.map((prod) => <ItemsRelacDet producto={prod} key={prod.cod_articulo}/>)}
            
        </div>
        
    )

}

export default ItemRelac