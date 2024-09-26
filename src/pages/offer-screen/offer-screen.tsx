import HeaderMain from '../../components/header-main/header-main.tsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.tsx';
import OfferContainer from '../../components/offer-container/offer-container.tsx';
import OfferOther from '../../components/offer-other/offer-other.tsx';

export default function OfferScreen(): JSX.Element {
  return (
    <div className="page">
      <HeaderMain />

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <OfferContainer />
          <section className="offer__map map"></section>
        </section>
        <OfferOther />
      </main>
    </div>
  );
}
