import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';
import { useState } from "react"
import Select from "../Select/select";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from 'react-router-dom';
import AlertaCarrito from "../Alertas/AlertaCarrito";

import React from 'react';





const ItemDetail=({item})=>{

    const {cart,addToCart,ExisteEnCarrito}=useContext(CartContext)
    const[cantidad,setCantidad]=useState(1)
    const [talle, setTalle] = useState()
    
   
    if(item.hasOwnProperty("talles"))
    {
        
        const handleAgregar=()=>{
            const itemToCart={
                cod_articulo:item.cod_articulo,
                precio:item.precio,
                nombre:item.nombre,
                descripcion:item.descripcion,
                imagen:item.imagen,
                cantidad,
                talle,
               
            }
            ExisteEnCarrito(item.cod_articulo)
            ?AlertaCarrito()
            :addToCart(itemToCart)
            
             
           
            
            
           
        }
    
        return(
            <div className="Container">
               
                
                
            <div className="contenedorDetalle" key={item.cod_articulo}>
              
                       <div className="contenedorImgDetalle">
                          <img src={item.imagen} ></img>
                       </div>  
                           <div className="contenedorDetalleDerecha">
                               <h2 className="tituloDetalle">{item.nombre}</h2>
    
                               <p className="precioDetalle">U$S {item.precio}</p>
    
                               <Select className="size" options={item.talles} onSelect={setTalle}/>
                               <br/>
                                    {
    
                                        ExisteEnCarrito(item.cod_articulo)
                                        ?  <Link to="/cart" 
                                        className="botonTerminar">Terminar mi Compra
                                        
                                        </Link>
                                        :
                                         <Contador cantStock={item.stock} 
                                        counter={cantidad}
                                        setCounter={setCantidad}
                                   /> 
                                    }
                                   <div className="cantStock">
                                   <br/> 
                        <p>Stock: {item.stock}</p>
                </div>
                <br/>   
            
                <div className="contenedorAgregar">
                    
    
                        <button className="botonAgregar" onClick={handleAgregar}>Add To Cart</button>
                    
                </div>
            
                <br/>   
                <div className="contenedorDescripcion">
                    <p>{item.descripcion}</p>
                </div>
                                  
                                  
                           </div> 
                   </div>
               
           
    
       </div>
        )
    }


    const handleAgregar=()=>{
        const itemToCart={
            cod_articulo:item.cod_articulo,
            precio:item.precio,
            nombre:item.nombre,
            descripcion:item.descripcion,
            imagen:item.imagen,
            stock:item.stock,
            cantidad,
            
           
        }
        ExisteEnCarrito(item.cod_articulo)
        ?AlertaCarrito()
        :addToCart(itemToCart)
        
         
       
        
        
       
    }

    return(
        <div className="Container">
           
            
            
        <div className="contenedorDetalle" key={item.cod_articulo}>
          
                   <div className="contenedorImgDetalle">
                      <img src={item.imagen} ></img>
                   </div>  
                       <div className="contenedorDetalleDerecha">
                           <h2 className="tituloDetalle">{item.nombre}</h2>

                           <p className="precioDetalle">U$S {item.precio}</p>

                         
                           <br/>
                                {

                                    ExisteEnCarrito(item.cod_articulo)
                                    ?  <Link to="/cart" 
                                    className="botonTerminar">Terminar mi Compra
                                    
                                    </Link>
                                    :
                                     <Contador cantStock={item.stock} 
                                    counter={cantidad}
                                    setCounter={setCantidad}
                               /> 
                                }
                               <div className="cantStock">
                               <br/> 
                    <p>Stock: {item.stock}</p>
            </div>
            <br/>   
        
            <div className="contenedorAgregar">
                

                    <button className="botonAgregar" onClick={handleAgregar}>Add To Cart</button>
                
            </div>
        
            <br/>   
            <div className="contenedorDescripcion">
                <p>{item.descripcion}</p>
            </div>
                              
                              
                       </div> 
               </div>
           
       

   </div>
    )
}
export default ItemDetail


