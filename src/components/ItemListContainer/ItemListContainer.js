import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemList from "../itemList/itemList"

import { useParams } from "react-router-dom"

import TituloInicio from "../Titulos/tituloInicio"



const ItemListContainer = () =>{
  

    const [productos,setProductos]=useState([])   

    const { categoria }=useParams()
   
    

    useEffect(()=>{
        pedirDatos()
        .then((res)=>{
            if(!categoria){
                setProductos(res)
            }else{
                setProductos(res.filter((prod)=>prod.categoria===categoria))
            }
           
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{

        })

    },[categoria])
   
       

        return(

            <div>
                <TituloInicio/>
                <ItemList productos={productos}/>
            </div>
        )
   
}
export default ItemListContainer