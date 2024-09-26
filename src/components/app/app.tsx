import {Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import {AppRoute} from '../../types/app-route.enum';
import {OfferPreviewType} from '../../types/offer-preview.type';
import PrivateRoute from '../private-route/private-route.tsx';
import {AUTH_STATUS} from '../../const.ts';

export type AppProps = {
  offers: OfferPreviewType[];
}

export function App({offers}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoute.Main} element={<MainScreen offers={offers}/>}/>
      <Route path={AppRoute.Login} element={<LoginScreen/>}/>
      <Route path={AppRoute.Offer} element={<OfferScreen/>}/>
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute redirectTo={AppRoute.Login} restrictedFor={AUTH_STATUS}>
            <FavoritesScreen/>
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
