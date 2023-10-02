
import { useLocation, Navigate} from "react-router-dom";

export default function PrivateRoute({children}){
    const token=localStorage.getItem("token")
    
    let path=useLocation();
      return token? children:<Navigate to={'/login'} state={path.pathname} replace={false} /> 
}
