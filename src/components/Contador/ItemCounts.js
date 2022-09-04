import { useState } from "react"
import "./ItemCounts.css"

const Contador =(cantStock)=>{
  const stock=50
  console.log(cantStock)
    const[counter,setCounter]=useState(1)
    
    const handleSumar=()=>{
      if(counter < cantStock.cantStock)
      {
        
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
    
        <div className="contenedorPadreContador">
                <h5>Quantity</h5>
            <div className="contenedorCounter">
            
                <div className="contenedorItem">
                    
                    <span className="cantItem">{counter}</span>
                    
                </div >
                    <div className="ContenedorBoton">
                        
                        <button onClick={handleRestar} className="botonItems">-</button>
                        
                    </div>
                        <div className="ContenedorBoton">
                           
                            <button onClick={handleSumar}  className="botonItems">+</button>
                            
                            
                        </div>
                </div>
            
        </div>

    )
}
export default Contador