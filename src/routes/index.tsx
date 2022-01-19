import { Switch } from "react-router-dom";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";
import { Shopping } from "../pages/Shopping";
import { SignUp } from "../pages/SignUp";
import { useAuth } from "../providers/authContext";
import { Route } from "./Route";

export const Routes = () => {
  const { accessToken } = useAuth();

  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/shopping" component={Shopping} isPrivate />
      <Route component={PageNotFound} isPrivate={!!accessToken} />
    </Switch>
  );
};
