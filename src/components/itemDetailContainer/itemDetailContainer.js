import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader";



const ItemDetailContainer = () =>{
  

    const [item,setItem]=useState(null)  
    const[loading,setLoading]=useState(true) 
    const{cod_articulo}=useParams()


   useEffect(()=>{
    setLoading(true)
        pedirDatos()
        .then((res)=>{
            setItem(res.find((prod)=>prod.cod_articulo===Number(cod_articulo)))
           
           
        })
        .catch((error)=>{
            console.log(error)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[])
    
    console.log(item)
        return(

            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                {   
                
                 

                     loading ? <center><BarLoader color="#010202" width={500} /></center> : 
                     <ItemDetail item={item}/> 
                }
                
            </div>
        )
   
}
export default ItemDetailContainer

