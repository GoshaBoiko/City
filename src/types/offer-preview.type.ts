import {LocationType} from './location.type.ts';
import {CityType} from './city.type.ts';
import { OfferType } from './offer.type.ts';

export type OfferPreviewType = OfferType & {
  'id': string;
  'title': string;
  'type': string;
  'price': number;
  'previewImage': string;
  'city': CityType;
  'location': LocationType;
  'isFavorite': boolean;
  'isPremium': boolean;
  'rating': number;
}
