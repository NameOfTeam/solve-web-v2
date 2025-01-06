export interface BaseResponse<T> {
  data: T;
  status: number;
}