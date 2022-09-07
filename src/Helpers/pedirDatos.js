import { stock } from "../Data/data"



export const pedirDatos=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve(stock)

        },2000)



    })
}