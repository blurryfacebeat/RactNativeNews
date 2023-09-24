import type NewsModel from '../models/NewsModel';

export type TNewGetBySourceResponse = Promise<NewsModel[]>;

export interface INewsDatasource {
  getBySource: (source: string) => TNewGetBySourceResponse;
}
