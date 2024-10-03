import OfferMap from '../../../components/offer-map/offer-map';
import OffersList from '../../../components/offers-list/offers-list';
import { OfferPreviewType } from '../../../types';

type CitiesProps = {
  offers: OfferPreviewType[];
};

export default function Cities({ offers }: CitiesProps) {
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} places to stay in Amsterdam
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            {/* todo visually-hidden у списка ниже нужно убрать!!!*/}
            <ul className="places__options places__options--custom places__options--opened visually-hidden">
              <li
                className="places__option places__option--active"
                tabIndex={0}
              >
                Popular
              </li>
              <li className="places__option" tabIndex={0}>
                Price: low to high
              </li>
              <li className="places__option" tabIndex={0}>
                Price: high to low
              </li>
              <li className="places__option" tabIndex={0}>
                Top rated first
              </li>
            </ul>
          </form>
          <OffersList offers={offers} />
        </section>
        <OfferMap />
      </div>
    </div>
  );
}
