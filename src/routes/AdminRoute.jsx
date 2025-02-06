import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = (children) => {
    const [user, isLoading] = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(user && isAdmin){
        return children;
    }
    return (
        <Navigate to='/login' state={{from : location}} replace></Navigate>
    );
};

export default AdminRoute;