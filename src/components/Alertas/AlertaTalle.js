import Swal from 'sweetalert2';

const AlertaTalle=()=>{
return(
    Swal.fire({
           
        icon: 'warning',
        text: 'Tiene que elegir un Talle!!',
      })
      )
}

export default AlertaTalle