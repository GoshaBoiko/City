import {Navigate, Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PrivateRoute, {isAuth} from '../private-route/private-route';
import OfferContainer from '../offer-container/offer-container';
import { AppRoute, OfferPreviewType} from '../../types';


export type AppProps = {
  offers: OfferPreviewType[];
}

export function App({offers}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={<MainScreen offers={offers} />}
      />
      <Route
        path={AppRoute.Login}
        element={
          isAuth ? (
            <Navigate to={AppRoute.Main} />
          ) : (
            <LoginScreen />
          )
        }
      />
      <Route path={AppRoute.Offer} element={<OfferScreen offers={offers} />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesScreen />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
