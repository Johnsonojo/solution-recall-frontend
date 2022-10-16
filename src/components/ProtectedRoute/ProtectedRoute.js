import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ user }) => {
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
