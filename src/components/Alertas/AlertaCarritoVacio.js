import Swal from 'sweetalert2';

const AlertaCarritoVacio=()=>{
   



return(
    Swal.fire({
           
        icon: 'warning',
        text: 'Carrito Vacio!!',
      })
      )
      
}

export default AlertaCarritoVacio