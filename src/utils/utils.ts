import {AuthorizationStatus} from '../types/authorization-status.enum';

export const checkAuthorizationStatus = (status: AuthorizationStatus) =>
  status === AuthorizationStatus.Auth;
