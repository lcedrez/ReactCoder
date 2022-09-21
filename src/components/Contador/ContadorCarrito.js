import { useState } from "react"
import "./ContadorCarrito.css"

const ContadorCarrito =({cantStock,counter,setCounter })=>{
    
    const handleSumar=()=>{
        
      if(counter < cantStock)
      {
        console.log(counter)
      setCounter(counter+1)
      }
    
    }


    const handleRestar=()=>{
        if( counter > 1)
        {
           
       setCounter(counter-1)
      
        }
    }

return(
    
        <div className="contenedorPadreContador2">
                
            <div className="contenedorCounter2">
            
                <div className="contenedorItem2">
                    
                    <span className="cantItem2">{counter}</span>
                    
                </div >
                    <div className="ContenedorBoton2">
                        
                        <button onClick={handleRestar} className="botonItems2">-</button>
                        
                    </div>
                        <div className="ContenedorBoton2">
                           
                            <button onClick={handleSumar} className="botonItems2">+</button>
                            
                            
                        </div>
                </div>
                          
                          
        </div>

    )
}
export default ContadorCarrito
