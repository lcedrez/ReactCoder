import Item from "../Item/item"


const ItemList=({productos =[]})=>{
    return(

        <div className="Container">
            <h2>Productos</h2>
                <hr></hr>
            {productos.map((prod)=> <Item producto={prod} key={prod.cod_articulo}/>)}

        </div>
    )
}

export default ItemList