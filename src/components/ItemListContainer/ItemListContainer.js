import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemList from "../itemList/itemList"



const ItemListContainer = () =>{
  

    const [productos,setProductos]=useState([])   

   
    

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