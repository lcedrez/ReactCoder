import './Register.css'
import { Link } from "react-router-dom";
import { db } from "../../FireBase/config";

const Register=()=>{

    


    return(

            <div className="formRegister">

                <form>
                    <input name="nombre"  type={'text'} className=" my-3 form-control" placeholder="First name" required/>
                                <input name="apellido"  type={'text'} className=" my-3 form-control" placeholder="Last name" required/>
                                <input  name="pass"  type={'password'} className="my-3 form-control" placeholder="Enter your password" required/>
                                <input name="repass"    type={'password'} className="my-3 form-control" placeholder="Repeat password" required/>
                                <div className="contenedorBirth">
                                    <label for="start">BIRTHDAY</label>
                                        <div className="contenedorFecha">
                                            <input type="date" id="start" name="trip-start" ></input>
                                        </div>
                                </div>

                                <button type="submit" className="btnCheckout">Create</button>
                </form>
            </div>
                                
                            
    )

}



export default Register
