import Swal from 'sweetalert2';

const AlertaCarrito=()=>{
return(
    Swal.fire({
           
        icon: 'warning',
        text: 'Articulo ya agregado!!',
      })
      )
}

export default AlertaCarrito