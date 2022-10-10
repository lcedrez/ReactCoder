import { createContext, useContext, useState } from "react";



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
            }
        } else {
            setUser({
                user: '',
                logged: false,
                error: "Email incorrecto"
            })
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false,
            error: ''
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