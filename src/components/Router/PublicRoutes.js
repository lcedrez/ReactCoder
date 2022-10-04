import Login from '../Login/Login';
import Register from '../Register/Register';
import{Routes,Route} from 'react-router-dom'; 





const PublicRoutes=()=>{

return(

    <Routes>
        <Route path="/Register" element={<Register/>}/>          
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Login/>}/>
          
     </Routes>
)

}


export default PublicRoutes