import NewsModel from '../../../domain/models/NewsModel';
import { type INewsDatasource } from '../../../domain/news/INewsDatasource';
import { type IHttpClient } from '../../../modules/HttpClient.types';
import validateNewsResponse from '../validation/newsValidation';

class NewsDatasource implements INewsDatasource {
  constructor(private readonly httpClient: IHttpClient) {}

  getBySource(source: string): NewsModel[] {
    const response = this.httpClient.get(`/everything/${source}.json`);

    const { articles } = validateNewsResponse(response);

    return articles.map(
      ({
        source,
        content,
        url,
        urlToImage,
        description,
        author,
        title,
        publishedAt,
      }) =>
        new NewsModel(
          source,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        ),
    );
  }
}

export default NewsDatasource;
