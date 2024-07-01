import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import { Loader } from "@material-tailwind/react";

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <Loader />;
  if (!loading && !isAuthenticated) return <Navigate to={"/login"} replace />;
  return <Outlet />;
};
