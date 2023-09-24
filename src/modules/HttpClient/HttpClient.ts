import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';

import { type IHttpClient, type IHttpOptions } from './HttpClient.types';

class HttpClient implements IHttpClient {
  readonly instance: AxiosInstance;

  constructor(options?: IHttpOptions) {
    this.instance = axios.create({
      baseURL: options?.baseURL ?? '',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        ...options?.headers,
      },
      params: options?.params ?? {},
    });

    this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor(): void {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError,
    );
  }

  private readonly handleResponse = async ({
    data,
  }: AxiosResponse): Promise<AxiosResponse> => data;

  private readonly handleError = async (
    error: AxiosError,
  ): Promise<AxiosError> => await Promise.reject(error.response);

  get = async <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>,
  ): Promise<R> => await this.instance.get(resource, { params });

  post = async <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ): Promise<R> => await this.instance.post(resource, body, { params });

  delete = async <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>,
  ): Promise<R> => await this.instance.delete(resource, { params });

  put = async <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ): Promise<R> => await this.instance.put(resource, body, { params });

  patch = async <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ): Promise<R> => await this.instance.patch(resource, body, { params });
}

export default HttpClient;
