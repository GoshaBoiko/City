import {CommetsNameType} from './name.type.ts';

export type CommetsDataType = {
  'id': string;
  'date': string;
  'user': CommetsNameType;
  'comment': string;
  'rating': number;
}
