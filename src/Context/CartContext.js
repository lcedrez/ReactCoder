
import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';



export const CartContext=createContext()

const initCarrito=JSON.parse(localStorage.getItem('carrito'))||[]

export const CartProvider=({children})=>{
    const[cart,setCart]=useState(initCarrito)

    const addToCart=(item)=>{
      setCart([...cart,item])
  
    }

    const finalizarCompra=()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Compra realizada con exito!!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const alertaCarritoVacio=()=>{
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: 'Carrito Vacio!!',
        showConfirmButton: false,
        timer: 1500
      })
    }

    const alertaStock=(OutStockRec)=>{

      
      Swal.fire({
        position: 'top-end',
        icon: 'warning',
        title: `No hay stock para,${OutStockRec} `,
        showConfirmButton: false,
        timer: 1500
      })
    }
  
    const ExisteEnCarrito=(cod_articulo)=>{
      return( 
        cart.some((item)=> item.cod_articulo===cod_articulo))
    }
  
    const itemsEnCarrito=()=>{
      return cart.reduce((acc,item)=>acc +item.cantidad,0)
    }

    const cartTotal=()=>{
        return cart.reduce((acc,item)=>acc + item.cantidad * item.precio,0)
    }

    const cartTotalActualiza=({cantidad})=>{
      return cart.reduce((acc,item)=>acc + cantidad * item.precio,0)
  }

    const eliminarItem=(cod_articulo)=>{
      setCart(cart.filter((item)=>item.cod_articulo!==cod_articulo))

    }
  
    const emptyCart=()=>{
        setCart([])
    }

    useEffect(()=>{

        localStorage.setItem('carrito',JSON.stringify(cart))
    },[cart])  

    return(
        <CartContext.Provider value={{

            cart,
            addToCart,
            ExisteEnCarrito,
            itemsEnCarrito,
            cartTotal,
            emptyCart,
            cartTotalActualiza,
            eliminarItem,
            finalizarCompra,
            alertaCarritoVacio,
            alertaStock
          }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
  return useContext(CartContext)
}