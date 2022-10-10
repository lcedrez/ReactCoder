import { useContext } from "react"
import Logo from '../../assets/img/LogoStoreUy.jpg';
import { useState } from "react"
import { LoginContext } from "../../Context/LoginContext"
import "./Login.css"
import { Link } from "react-router-dom";

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
                        <div  className='logo'>
                            <img src={Logo} alt="Logo" />
                        </div>
                          
            <div className='containerFormSign'>
             
                        <form onSubmit={handleSubmit} className="contFormulario">
                            <p className="titSignin">Sign In</p>
                                    <input id="mailSign" name="mail" onChange={handleInputChange}  type={'email'} value={values.mail} className="my-3 form-control" placeholder="ENTER YOUR EMAIL *" required/>
                                        <input id="passSign" name="pass" value={values.pass} onChange={handleInputChange}  type={'password'} className="my-3 form-control" placeholder="Enter your password" required/>
                                          
                                                                <div className="btnLogin">
                                                                    <button type="submit" className="btnCheckout">Log in</button>
                                                                        <p className="NewtoBeat" > New to Beatles Store?</p>
                                                                </div>
                                                                            <div className="btnCreate">
                                                                                
                                                                                    <button type="button" className="createAccount">Create your Beatles Account</button>
                                                                                
                                                                            </div>
                        </form>                             
            </div>

        </div>

    )
}

export default Login

