import {Navigate, Route, Routes} from 'react-router-dom';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import {AppRoute} from '../../types/app-route.enum';
import {OfferPreviewType} from '../../types/offer-preview.type';
import PrivateRoute, {isAuth} from '../private-route/private-route';
import MainEmptyScreen from '../../pages/main-empty-screen/main-empty-screen.tsx';
import {CommetsDataType} from '../../types/commets-data.type.ts';
import {OfferType} from '../../types/offer.type.ts';
import OfferContainer from '../offer-container/offer-container.tsx';

export type AppProps = {
  offers: OfferPreviewType[];
  comments: CommetsDataType;
  offer: OfferType;
}

export function App({offers, comments, offer}: AppProps): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          offers.length === 0 ? (
            <MainEmptyScreen />
          ) : (
            <MainScreen offers={offers} />
          )
        }
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
      <Route path={AppRoute.Offer} element={<OfferScreen comments={comments} offers={offer}/>} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute>
            <FavoritesScreen />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      <Route path={AppRoute.Offer} element={<OfferContainer comments={comments} offer={offer}/>} />
    </Routes>
  );
}

export default App;
