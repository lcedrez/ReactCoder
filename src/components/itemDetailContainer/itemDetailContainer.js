import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemDetail from "../ItemDetail/ItemDetail"



const ItemDetailContainer = () =>{
  

    const [item,setItem]=useState([])   

   useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            setItem(res.filter((prod)=>prod.cod_articulo===1144))
            
           
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{

        })
        
    },[])
        
    console.log(item)
        return(

            <div>
                <ItemDetail item={item}/>
                
            </div>
        )
   
}
export default ItemDetailContainer

//<ItemDetail productos={productos.cod_articulo}/>
//setItem(res.filter((prod)=>prod.cod_articulo===1144))