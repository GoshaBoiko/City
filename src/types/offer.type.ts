import {CityType} from './city.type.ts';
import {LocationType} from './location.type.ts';
import {OfferHostType} from './offer-host.type.ts';

export type OfferType = {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'city': CityType;
  'location': LocationType;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
  'description': string;
  'bedrooms': number;
  'goods': Array<string>;
  'host': OfferHostType;
  'images': Array<string>;
  'maxAdults': number;
}
