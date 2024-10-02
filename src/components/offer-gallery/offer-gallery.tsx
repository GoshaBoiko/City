import {OfferType} from '../../types/offer.type.ts';

type OfferGalleryProps = {
  offer: OfferType;
}

export default function OfferGallery({offer}: OfferGalleryProps): JSX.Element {
  const {images, title} = offer;
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div className="offer__image-wrapper">
            <img className="offer__image" src={image} alt={title}/>
          </div>
        ))}
      </div>
    </div>
  );
}
