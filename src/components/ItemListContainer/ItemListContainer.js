import { useEffect, useState } from "react"

import { pedirDatos } from "../../Helpers/pedirDatos"

import ItemList from "../itemList/itemList"

import { useParams } from "react-router-dom"

import TituloInicio from "../Titulos/tituloInicio"
import { db  } from "../../FireBase/config"
import { collection,getDocs,query,where } from "firebase/firestore"



const ItemListContainer = () =>{
  

    const [productos,setProductos]=useState([])   

    const { categoria }=useParams()
   
    

    useEffect(()=>{
     
        const productosRef=collection(db,'articulos')
        console.log(productosRef)
       const q=categoria
                ? query(productosRef,where('categoria','==',categoria))
                : productosRef

        getDocs(q)
        .then((resp)=>{
            const articulosDB= resp.docs.map((doc)=>({cod_articulo:doc.id, ...doc.data()}))
            console.log(articulosDB)
            setProductos(articulosDB)
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