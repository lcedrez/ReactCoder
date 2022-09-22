import { useEffect, useState } from "react"
import { db } from "../../FireBase/config"
import { doc,getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import BarLoader from "react-spinners/BarLoader";



const ItemDetailContainer = () =>{
  

    const [item,setItem]=useState(null)  
    const[loading,setLoading]=useState(true) 
    const{cod_articulo}=useParams()


   useEffect(()=>{
    setLoading(true)
        const DocRef=doc(db,'articulos',cod_articulo)

        getDoc(DocRef)
        .then((res)=>{
           setItem({cod_articulo:res.id,...res.data()})
           
           
        })
        .catch((error)=>{
            console.log(error)
            
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[])
    
 
        return(

            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                {   
                
                 

                     loading ? <center><BarLoader color="#010202" width={500} /></center> : 
                     <ItemDetail item={item} /> 
                }
                
            </div>
        )
   
}
export default ItemDetailContainer

