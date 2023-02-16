import React, { useContext } from "react";
import { RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

type PrivateRouteProps = {
  component: React.ComponentType<any>;
} & RouteProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <></>
    // <Route
    //   {...rest}
    //   render={(props: any) =>
    //     isLoggedIn ? <Component {...props} /> : <Navigate to="/sign-in" />
    //   }
    // />
  );
};

export default PrivateRoute;
