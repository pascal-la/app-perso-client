import { Redirect, Route } from "react-router-dom";
import { useAuthState } from "../context/auth";

const AuthRoute = (props) => {
  const { user } = useAuthState();

  if (props.authenticated && !user) {
    return <Redirect to="/login" />;
  } else if (props.guest && user) {
    return <Redirect to="/" />;
  } else {
    return <Route component={props.component} {...props} />;
  }
};

export default AuthRoute;
