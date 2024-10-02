import {AuthorizationStatus} from '../types/authorization-status.enum';

export const checkAuthorizationStatus = (status: AuthorizationStatus) =>
  status === AuthorizationStatus.Auth;

export const calculationRating = (num: number) => {
  const result = num * 20;
  return result;
};
