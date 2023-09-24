import {
  type INewsDatasource,
  type TNewGetBySourceResponse,
} from '../news/INewsDatasource';

class GetNewsBySourceCase {
  constructor(private readonly datasource: INewsDatasource) {}

  async execute(): TNewGetBySourceResponse {
    return await this.datasource.getBySource('cnn');
  }
}

export default GetNewsBySourceCase;
