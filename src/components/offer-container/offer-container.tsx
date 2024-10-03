import cn from 'classnames';
import { calculationRating } from '../../utils/utils';
import { OfferType } from '../../types/offer.type';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form.tsx';

type OfferContainerProps = {
  offer: OfferType;
};

export default function OfferContainer({
  offer,
}: OfferContainerProps): JSX.Element {
  const {
    bedrooms,
    title,
    isPremium,
    rating,
    type,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = offer;
  const { name, avatarUrl, isPro } = host;

  return (
    <div className="offer__container container">
      <div className="offer__wrapper">
      {isPremium && (
        <div className="offer__mark">
          <span>Premium</span>
        </div>
      )}
        <div className="offer__name-wrapper">
          <h1 className="offer__name">{title}</h1>
          <button className="offer__bookmark-button button" type="button">
            <svg className="offer__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="offer__rating rating">
          <div className="offer__stars rating__stars">
            <span style={{ width: `${calculationRating(rating)}%` }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
          <span className="offer__rating-value rating__value">4.8</span>
        </div>
        <ul className="offer__features">
          <li className="offer__feature offer__feature--entire">{type}</li>
          <li className="offer__feature offer__feature--bedrooms">
            {bedrooms} Bedrooms
          </li>
          <li className="offer__feature offer__feature--adults">
            Max {maxAdults} adults
          </li>
        </ul>
        <div className="offer__price">
          <b className="offer__price-value">&euro;{price}</b>
          <span className="offer__price-text">&nbsp;night</span>
        </div>
        <div className="offer__inside">
          <h2 className="offer__inside-title">What&apos;s inside</h2>
          <ul className="offer__inside-list">
            {goods.map((good) => (
              <li className="offer__inside-item" key={good}>
                {good}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <div
              className={cn('offer__avatar-wrapper user__avatar-wrapper', {
                'offer__avatar-wrapper--pro': isPro,
              })}
            >
              <img
                className="offer__avatar user__avatar"
                src={avatarUrl}
                width="74"
                height="74"
                alt="Host avatar"
              />
            </div>
            <span className="offer__user-name">{name}</span>
            <span className="offer__user-status">{isPro}</span>
          </div>
          <div className="offer__description">
            <p className="offer__text">{description}</p>
          </div>
        </div>
        <section className="offer__reviews reviews">
          <h2 className="reviews__title">
            Reviews &middot; <span className="reviews__amount">{10}</span>
          </h2>
          <ul className="reviews__list">
            <li className="reviews__item">
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src="img/avatar-max.jpg"
                    width="54"
                    height="54"
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">lorem</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span
                      style={{ width: `${calculationRating(rating)}%` }}
                    ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">Lorem ipsum dolor sit amet.</p>
                <time className="reviews__time" dateTime="2019-04-24">
                  lorem
                </time>
              </div>
            </li>
          </ul>
          <OfferReviewsForm />
        </section>
      </div>
    </div>
  );
}
