import { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import TituloInicio from "../Titulos/tituloInicio";
import { db  } from "../../FireBase/config";
import ItemRelac from "../Item/ItemRelac/ItemRelac";
import { collection,getDocs,query,where } from "firebase/firestore"



const ItemListContainer = () =>{
  

    const [productos,setProductos]=useState([])   
    const[loading,setLoading]=useState(true) 
    const { categoria }=useParams()
   
    

    useEffect(()=>{
        setLoading(true)
        const productosRef=collection(db,'articulos')
       
       const q=categoria
                ? query(productosRef,where('categoria','==',categoria))
                : productosRef
                
        getDocs(q)
        .then((resp)=>{
            const articulosDB= resp.docs.map((doc)=>({cod_articulo:doc.id, ...doc.data()}))
            setProductos(articulosDB)
        })
        .finally(()=>{
            setLoading(false)
        })

    },[categoria])
   
  
        return(
          
            <div>
            <TituloInicio/>
                    {
                        loading ? <center><BarLoader color="#010202" width={500} /></center> :
                       
                        <ItemList productos={productos}/>
                        
                    }

                   

            </div>
        )
   
}
export default ItemListContainer