import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemList from "../itemList/itemList"



const ItemListContainer = () =>{
   // <h1 className="tituloStore" >
   // SHOP THE GET BACK AND LET IT BE COLLECTIONS
   // </h1>

    const [productos,setProductos]=useState([])   

   
    console.log(productos)

    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{

        })

    },[])
   

        return(

            <div>
                <ItemList productos={productos}/>
            </div>
        )
   
}
export default ItemListContainer