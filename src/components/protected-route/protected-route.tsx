import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

interface IProps {
  onlyUnAuth?: boolean;
  component: React.JSX.Element;
}

const Protected = ({
  onlyUnAuth = false,
  component,
}: IProps): React.JSX.Element | null => {
  const { user, isAuthChecked } = useUser();

  const location = useLocation();

  if (!isAuthChecked) {
    return null;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя
  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component }: { component: React.JSX.Element }) => (
  <Protected onlyUnAuth={true} component={component} />
);
