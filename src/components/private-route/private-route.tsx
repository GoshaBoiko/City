import {Navigate} from 'react-router-dom';
import {checkAuthorizationStatus} from '../../utils/utils';
import {ReactNode} from 'react';
import {AUTH_STATUS} from '../../const';
import {AppRoute} from '../../types/app-route.enum';

export const isAuth = checkAuthorizationStatus(AUTH_STATUS);

type PrivateRouteProps = {
  children: ReactNode;
}


export default function PrivateRoute({children}: PrivateRouteProps) {
  return isAuth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login}/>
  );
}

