// import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useAuth from "../hooks/useAuth";

// const AdminRoute = ({children}) => {
//     const [user] = useAuth();
//     const [isAdmin] = useAdmin();
//     const location = useLocation();
//     if(user && isAdmin){
//         return children;
//     }
//     return (
//         <Navigate to='/' state={{from : location}} replace></Navigate>
//     );
// };

// export default AdminRoute;

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user } = useAuth(); 
    const [isAdmin, isAdminLoading] = useAdmin(); 
    const location = useLocation();

    if (isAdminLoading) {
        
        return <div>Loading...</div>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
