import Login from '../Login/Login';
import{Routes,Route} from 'react-router-dom'; 





const PublicRoutes=()=>{

return(

    <Routes>
                    
        <Route path="/Login" element={<Login/>}/>
        <Route path="*" element={<Login/>}/>
          
     </Routes>
)

}


export default PublicRoutes