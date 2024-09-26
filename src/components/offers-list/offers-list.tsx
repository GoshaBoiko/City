import {OfferPreviewType} from '../../types/offer-preview.type.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type OffersListProps = {
  offers: OfferPreviewType[];
}

export default function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}
