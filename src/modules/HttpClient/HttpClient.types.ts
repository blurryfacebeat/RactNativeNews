import { type AxiosInstance, type AxiosResponse } from 'axios';

export interface IHttpClient {
  instance: AxiosInstance;

  get: <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>,
  ) => Promise<R>;

  post: <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ) => Promise<R>;

  delete: <T = never, R = AxiosResponse<T>>(
    resource: string,
    params?: Record<string, unknown>,
  ) => Promise<R>;

  put: <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ) => Promise<R>;

  patch: <S, T = never, R = AxiosResponse<T>>(
    resource: string,
    body: Record<string, unknown> | S,
    params?: Record<string, unknown>,
  ) => Promise<R>;
}

export interface IHttpOptions {
  baseURL?: string;
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
}
