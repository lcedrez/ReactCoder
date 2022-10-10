import { createContext, useContext, useState } from "react";
import Swal from 'sweetalert2';




export const LoginContext=createContext()
const usuarios=[
    {
        mail:'lcedrez@gmail.com',
        pass:'12345678'
    },
    {
        mail:'clanusse@gmail.com',
        pass:'12345678'
    }
    ]
   

export const LoginProvider=({children})=>{

    const [user,setUser]=useState({
        user:'',
        logged:false,
        error:''
    })
   
    const login = (values) => {
    
    
        const match = usuarios.find(user => user.mail === values.mail)
      
        if (match) {
            if (match.pass === values.pass) {
                setUser({
                    user: match.mail,
                    logged: true,
                    error: ''
                })
            } else {
                setUser({
                    user: '',
                    logged: false,
                    error: "Password incorrecto"
                    
                })
                alertaPassword()
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: "Email incorrecto"
            })

            alertaMail()    
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
        })
    }
       
    


    const alertaPassword=()=>{
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Password Incorrecto!!',
          showConfirmButton: false,
          timer: 1500
        })
      }

      const alertaMail=()=>{
        Swal.fire({
          position: 'top-center',
          icon: 'warning',
          title: 'Mail Incorrecto!!',
          showConfirmButton: false,
          timer: 1500
        })
      }



    return(
        <LoginContext.Provider value={{user,login,logout}}>
            {children}
        </LoginContext.Provider>
    )
}
export const useLoginContext = () => {
    return useContext(LoginContext)
}