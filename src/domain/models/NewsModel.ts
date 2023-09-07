type TSource = {
  id: string | null;
  name: string;
};

class NewsModel {
  constructor(
    readonly source: TSource,
    readonly author: string,
    readonly title: string,
    readonly description: string,
    readonly url: string,
    readonly urlToImage: string,
    readonly publishedAt: string,
    readonly content: string,
  ) {}
}

export default NewsModel;
