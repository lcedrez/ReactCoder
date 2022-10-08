import { useState } from "react";
import "./Checkout.css";
import { useCartContext } from "../../Context/CartContext";
import { addDoc,collection,getDocs,writeBatch,query,where,documentId } from "firebase/firestore";
import { db } from "../../FireBase/config";
import { Link } from "react-router-dom";
const Checkout=()=>{

    const{cart,cartTotal,finalizarCompra,alertaCarritoVacio,emptyCart,cartTotalActualiza,alertaStock}=useCartContext()
    

    const[values,setValues]=useState({
        nombre:'',
        apellido:'',
        mail:'',
        dir:'',
        telefono:''
       
    })

 const handleInputChange=(e)=>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })

 }      
        
    
    const handleSubmit= async (e)=>{
        e.preventDefault()
        
        const orden={
            comprador:values,
            items:cart,
            total:cartTotal()    
        }
           

            //Validaciones

                if(cart.length===0){
                return alertaCarritoVacio()
            }
            
            const batch=writeBatch(db)
            const ordenesRef=collection(db,'ordenes')
            const productosREf=collection(db,'articulos')

            const q=query(productosREf, where(documentId(),'in',cart.map(item=>item.cod_articulo)))

            const articulos= await getDocs(q)
            
            const outStock=[]

            articulos.docs.forEach((doc)=>{
                const itemInCart=cart.find(item=>item.cod_articulo===doc.id)
                if(doc.data().stock>=itemInCart.cantidad){
                    batch.update(doc.ref,{
                        stock: doc.data().stock - itemInCart.cantidad
                    })
                }else{
                    outStock.push(itemInCart)
                }

            })


            if(outStock.length===0){
                batch.commit()
                .then((doc)=>{
                    addDoc(ordenesRef,orden)
                       finalizarCompra()
                     
                        emptyCart()  
                }) 
            }
            else
            {
                alertaStock()
            }
            
          
    }
   // addDoc(ordenesRef,orden)
   // .then((doc)=>{
     //   finalizarCompra()
    //a
      //  emptyCrt()   

    
   // })
    



    return(
        
        <div className="container my-5">
            <br/>
            <br/>
            <br/>
            <h2>SHIPPING ADRESS</h2>
            <div className="claseFlex">
                <form onSubmit={handleSubmit}>
                    
                    <div className="contenedorNameApe">
                        <input id="inputNombre" name="nombre" value={values.nombre} onChange={handleInputChange } type={'text'} className=" my-3 form-control" placeholder="First name" required/>
                            <div className="contenedorApellido">
                                <input id="inputApellido" name="apellido" value={values.apellido} onChange={handleInputChange } type={'text'} className=" my-3 form-control" placeholder="Last name" required/>
                            </div>
                    </div>
                                <input name="mail" value={values.mail} onChange={handleInputChange }  type={'email'} className="my-3 form-control" placeholder="Email" required/>
                                    <input name="dir" value={values.dir} onChange={handleInputChange } type={'text'} className="my-3 form-control" placeholder="Adress" required/>
                                        <input name="telefono" value={values.telefono} onChange={handleInputChange } type={'tel'} className="my-3 form-control" placeholder="Phone" required/>
                                             <div className="contenedorCheckCont">


                                                <Link  to={`/Cart`} className="linkCart">
                                                    
                                                        <h6 className="returnCart">Return to cart</h6>
                                                    
                                                </Link>
                                                    <div className="contenedorBtnCheck">
                                                        
                                                        <button type="submit" className="btnCheckout">Continue to Shipping</button>
                                                    </div>
                                            </div>
                                  
                </form>

                <div className="resume">
                        <div className="titResume">
                            <h4>RESUME</h4>
                        </div>
                    {cart.map((item)=>(
                    <div key={item.cod_articulo}>
                    
                        <div className="contenedorDetResume">
                            <div className="contImgCartRes">
                                <img src={item.imagen} ></img>
                            </div>
                            <div className="containerTodoDetalleResume">
                                <p className="nomDetCart">{item.nombre}</p>
                                <div className="contDetGralResume">
                                    <ul className="itemListadoRes"> 
                                    
                                        <li>
                                        <em className="precDet">{item.cantidad}X U$S {item.precio}</em>
                                        </li>
                                    </ul>
                            
                                </div>
                                    
                                <hr/>
                            </div>
                           
                        </div>
                       
                </div>
                

            ))}
                <div className="resumeTotal">
                <input id="discountCode" name="discount"   type={'text'} className="my-3 form-control" placeholder="Discount Code" required/>
                                <div className="subTotal">
                                    <h6>Sub Total</h6><h6> U$S {cartTotal()}</h6>
                                </div>
                                <div className="discountTit">
                                    <h6>Discount</h6><h6>U$S</h6>
                                </div>
                                <hr/>
                                <div className="totalCh">
                                <h6>Total</h6><h6>U$S</h6>
                                </div>
                </div>
                </div>
               
            </div>
            
        </div>
    )
}


export default Checkout