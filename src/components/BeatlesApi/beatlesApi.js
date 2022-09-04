import { useEffect, useState } from "react"

import './beatlesApi.css'

const BeatlesApi=()=>{

const[articulos,setCatalogo]=useState(null)



useEffect=(()=>{
    fetch('../../Helpers/pedirDatos.js')
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data)
       
    })

},[])

    return(
    <div className="cardContainer" >

        { 
       
          
            articulos ? 

                <>
                             <img src={articulos.imagen}></img>
                            <h4 className="tituloCard">{articulos.nombre}</h4>
                            <p className="precioCard">U$S {articulos.precio}</p>
                            
                            <div className="contenedorAgregar">
                                <button className="botonAgregar">Ver Detalle</button>
                            </div>
                   
              </>
             : null
           
        }
    </div>
)



}

export default BeatlesApi