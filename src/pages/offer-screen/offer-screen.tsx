import HeaderMain from '../../components/header-main/header-main.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';
import OfferContainer from '../../components/offer-container/offer-container.tsx';
import OfferOther from '../../components/offer-other/offer-other.tsx';
import {Helmet} from 'react-helmet-async';
import {OfferType} from '../../types/offer.type.ts';
import {CommetsDataType} from '../../types/commets-data.type.ts';

type OfferScreenProps = {
  offers: OfferType;
  comments: CommetsDataType;
}
export default function OfferScreen({offers, comments}: OfferScreenProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: Offers page</title>
        <meta name="keywords" content="Offers in Amsterdam"/>
      </Helmet>
      <HeaderMain/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery offer={offers}/>
          <OfferContainer offer={offers} comments={comments}/>
          <section className="offer__map map"></section>
        </section>
        <OfferOther/>
      </main>
    </div>
  );
}
