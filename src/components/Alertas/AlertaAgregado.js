import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import Swal from 'sweetalert2';
const AlertaAgregado=()=>{
   
    return(
        Swal.fire({
               
            icon: 'success',
            text: 'Se agrego Articulo!!',
          })
          )
      
}

export default AlertaAgregado