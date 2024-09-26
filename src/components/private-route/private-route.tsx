import {AppRoute} from '../../types/app-route.enum';
import {AuthorizationStatus} from '../../types/authorization-status.enum';
import {React} from 'react';
import {Navigate} from 'react-router-dom';
import {checkAuthorizationStatus} from '../../utils/utils';

type PrivateRouteProps = {
  restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
}

export default function PrivateRoute({restrictedFor, redirectTo, children}: PrivateRouteProps) {
  const isAuth = checkAuthorizationStatus(restrictedFor);

  return isAuth ? (
    children
  ) : (
    <Navigate to={redirectTo}/>
  );
}
