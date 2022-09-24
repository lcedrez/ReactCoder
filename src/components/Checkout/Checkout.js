import { useState } from "react";
import "./Checkout.css";
import { useCartContext } from "../../Context/CartContext";
import { Navigate } from "react-router-dom";

const Checkout=()=>{

    const{cart,cartTotal}=useCartContext()


    const[values,setValues]=useState({
        nombre:'',
        mail:'',
        dir:''
    })

 const handleInputChange=(e)=>{
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })

 }      
        
    
    const handleSubmit=(e)=>{
        e.preventDefault()
    
        const orden={
            comprador:values,
            items:cart,
            total:cartTotal()    
        }
            console.log(orden)

            //Validaciones

                if(cart.length===0)
                return <Navigate     to="/"/>
    }




    return(
        <div className="container my-5">
            <br/>
            <br/>
            <br/>
            <h2>Checkout!!</h2>
                <form onSubmit={handleSubmit}>
                    <input name="nombre" value={values.nombre} onChange={handleInputChange } type={'text'} className=" my-3 form-control" placeholder="Nombre"/>
                    <input name="mail" value={values.mail} onChange={handleInputChange }  type={'email'} className="my-3 form-control" placeholder="Email"/>
                    <input name="dir" value={values.dir} onChange={handleInputChange } type={'text'} className="my-3 form-control" placeholder="Direccion"/>
                    <button type="submit" className="btnCheckout">ENVIAR</button>
                </form>

        </div>
    )
}


export default Checkout