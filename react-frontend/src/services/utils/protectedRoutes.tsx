import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  isSignedIn: boolean;
  children: any;
};

function ProtectedRoute({ isSignedIn, children }: Props) {
  if (!isSignedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export default ProtectedRoute;
