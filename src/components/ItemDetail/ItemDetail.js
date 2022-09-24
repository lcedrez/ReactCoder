import "./itemDetail.css"
import Contador from '../Contador/ItemCounts';
import { useEffect, useState } from "react";
import Select from "../Select/select";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link, useParams } from 'react-router-dom';
import AlertaCarrito from "../Alertas/AlertaCarrito";
import React from 'react';
import { collection,getDocs,query,where } from "firebase/firestore"
import { db  } from "../../FireBase/config";
import ItemRelac from "../Item/ItemRelac/ItemRelac";



const ItemDetail=({item})=>{
    const [productosRelac,setProductosRelac]=useState([])   
    const {cart,addToCart,ExisteEnCarrito}=useContext(CartContext)
    const[cantidad,setCantidad]=useState(1)
    const [talle, setTalle] = useState()
   

    useEffect(()=>{
       
        const productosRelac=collection(db,'articulos')
       
       const q=item.categoria
                ? query(productosRelac,where('categoria','==',item.categoria))
                : productosRelac
                
        getDocs(q)
        .then((resp)=>{
            const articulosDBCat= resp.docs.map((doc)=>({cod_articulo:doc.id, ...doc.data()}))
            setProductosRelac(articulosDBCat)
         
        })
        .finally(()=>{
            
        })
       
    },[item.categoria])
      
   
    if(item.hasOwnProperty("talles"))
    {
        
        const handleAgregar=()=>{
            const itemToCart={
                cod_articulo:item.cod_articulo,
                precio:item.precio,
                nombre:item.nombre,
                descripcion:item.descripcion,
                imagen:item.imagen,
                stock:item.stock,
                categoria:item.categoria,
                cantidad,
                talle,
               
            }
            ExisteEnCarrito(item.cod_articulo)
            ?AlertaCarrito()
            :addToCart(itemToCart)
            
             
           
            
            
           
        }
    
        return(
           <div>
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
                        <div className="containerListRelac">
                            <ItemRelac productosRelac={productosRelac}/>
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
            categoria:item.categoria,
            cantidad,
            
           
        }
        ExisteEnCarrito(item.cod_articulo)
        ?AlertaCarrito()
        :addToCart(itemToCart)
        
         
       
        
        
       
    }

    return(
        <div>
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
                        <div className="containerListRelac">
                            <ItemRelac productosRelac={productosRelac}/>
                        </div> 
    </div>
    )

    

}
export default ItemDetail


