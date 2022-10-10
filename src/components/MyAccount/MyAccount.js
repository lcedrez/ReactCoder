
import { useLoginContext } from '../../Context/LoginContext';
import { collection,getDocs,query,where } from "firebase/firestore"
import { useEffect, useState } from "react";
import { db  } from "../../FireBase/config";
const MyAccount=()=>{
    const [ordenes,setOrdenes]=useState([])   
    const {user,logout}=useLoginContext()
   

    useEffect(()=>{
        const ordenesRef=collection(db,'ordenes')
      
        const q=user.user 
        ? query(ordenesRef,where('mail','==',user.user))
        : ordenesRef
        getDocs(q)
        .then((resp)=>{
            
            const ordenesDb=resp.docs.map((doc)=>({user:doc.mail, ...doc.data()}))
            setOrdenes(ordenesDb)
            console.log(ordenes)
        })
        .finally(()=>{
    
        })
    

    },[user.user])

 

    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
         
            <div>
                <h5>MIS ORDENES</h5>
            </div>
        </div>
    )

}

export default MyAccount