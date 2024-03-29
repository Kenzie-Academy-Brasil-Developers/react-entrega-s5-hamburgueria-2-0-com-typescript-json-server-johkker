import { ComponentType } from "react";
import { Redirect, Route as ReactRoute, RouteProps } from "react-router-dom";
import { useAuth } from "../providers/authContext";

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: ComponentType;
}

// true e true = ok
// true e false = n ok
// false e true = n ok
// false e false = ok

export const Route = ({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) => {
  const { accessToken } = useAuth();

  return (
    <ReactRoute
      {...rest}
      render={() =>
        isPrivate === !!accessToken ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/shopping"} />
        )
      }
    />
  );
};
