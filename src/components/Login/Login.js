import { useContext } from "react"

import { useState } from "react"
import { LoginContext } from "../../Context/LoginContext"
import "./Login.css"

const Login=()=>{

    const {login,user}=useContext(LoginContext)
   console.log(user)

    const[values,setValues]=useState({
        mail:'',
        pass:''
       
       
    })



    const handleInputChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    
     }     

 

    const handleSubmit=(e)=>{
        e.preventDefault()


        const logueo={
            usuario:values,
        }
     
       login(values)

    }

    return(
        <div className="containerLogIn">
            <br/>
            <br/>
            <br/>
            <br/>
        
            <div className='containerFormSign'>
                        <form onSubmit={handleSubmit} className="contFormulario">
                            
                                    <input name="mail" onChange={handleInputChange}  type={'email'} value={values.mail} className="my-3 form-control" placeholder="ENTER YOUR EMAIL *" required/>
                                        <input name="pass" value={values.pass} onChange={handleInputChange}  type={'password'} className="my-3 form-control" placeholder="Enter your password" required/>
                                          
                                                                <div className="btnLogin">
                                                                    <button type="submit" className="btnCheckout">Log in</button>
                                                                </div>
                            </form>
            </div>

        </div>

    )
}

export default Login

/*
<input name="nombre"  type={'text'} className=" my-3 form-control" placeholder="First name" required/>
                                <input name="apellido"  type={'text'} className=" my-3 form-control" placeholder="Last name" required/>
                                <input name="repass"     type={'password'} className="my-3 form-control" placeholder="Repeat password" required/>
                                <div className="contenedorBirth">
                                    <label for="start">BIRTHDAY</label>
                                        <div className="contenedorFecha">
                                            <input type="date" id="start" name="trip-start" ></input>
                                        </div>
                                </div>
                                */