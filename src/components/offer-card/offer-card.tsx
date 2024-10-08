import {OfferPreviewType} from '../../types/offer-preview.type';
import {calculationRating, replaceId} from '../../utils/utils';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/app-route.enum.ts';

type OfferCardProps = {
  offer: OfferPreviewType;
}

export default function OfferCard({offer}: OfferCardProps): JSX.Element {
  const {previewImage, title, price, type, isPremium, rating, id} = offer;
  const [isHovered, setIsHovered] = useState(false);
  const path = replaceId(id);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log(id, isHovered);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className="cities__card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={path}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt={title}/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${calculationRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
