import {Navigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const ProtectedRoute=({childern})=>{
    const{isAuthenticated}=useAuth();
    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }
    return childern;
}
export default ProtectedRoute;