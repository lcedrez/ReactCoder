import { useState } from "react"
import "./ItemCounts.css"

const Contador =()=>{
    const stock=5
    const[counter,setCounter]=useState(1)

    const handleSumar=()=>{
      if(counter < stock)
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
    
        <div className="container">
            <h2>Items</h2>
            <hr/>
            <div className="stockArticulos">
                    <h3>Cantidad Stock : {stock}</h3>
            </div>
            <div className="contenedorCounter">
                <div className="ContenedorBoton">
                  
                    <button onClick={handleRestar} className="botonItems">-</button>
                   
                </div>
            <div className="contenedorItem">
                <span className="cantItem">{counter}</span>
            </div >
                <div className="ContenedorBoton">
                    
                    <button onClick={handleSumar}  className="botonItems">+</button>
                    
                </div>
            </div>
            <div className="contenedorAgregar">
            <button className="botonAgregar">Agregar al Carrito</button>
            </div>
        </div>

    )
}
export default Contador