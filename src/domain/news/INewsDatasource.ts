import type NewsModel from '../models/NewsModel';

export interface INewsDatasource {
  getBySource: (source: string) => NewsModel[];
}
