import HeaderMain from '../../components/header-main/header-main.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';
import OfferContainer from '../../components/offer-container/offer-container.tsx';
import OfferOther from '../../components/offer-other/offer-other.tsx';
import {Helmet} from 'react-helmet-async';
import { OfferPreviewType } from '../../types/offer-preview.type.ts';
import {  useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page.tsx';

type OfferScreenProps = {
  offers: OfferPreviewType[];
}

export default function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const offer = offers.find((offer) => offer.id === id);

  if (!offer) {
    return <NotFoundPage />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Offers page</title>
        <meta name="keywords" content="Offers in Amsterdam"/>
      </Helmet>
      <HeaderMain/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery offer={offer}/>
          <OfferContainer offer={offer} />
          <section className="offer__map map"></section>
        </section>
        <OfferOther/>
      </main>
    </div>
  );
}
