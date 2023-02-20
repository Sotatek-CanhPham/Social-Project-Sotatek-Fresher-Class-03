import { ReactFragment, ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isLoggedIn: boolean;
  children: any;
};

const ProtectedRoute = ({ isLoggedIn, children }: Props) => {
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }
  return children;
};
export default ProtectedRoute;
