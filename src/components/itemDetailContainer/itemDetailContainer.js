import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () =>{
  

    const [productos,setProductos]=useState(null)   

   useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setProductos(res.filter((prod)=>prod.cod_articulo===1144))
           
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{

        })

    },[])
        
    console.log(productos)
        return(

            <div>
                <ItemDetail productos={productos}/>
                
            </div>
        )
   
}
export default ItemDetailContainer

//<ItemDetail productos={productos.cod_articulo}/>