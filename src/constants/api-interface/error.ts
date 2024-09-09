export interface ErrorResponse {
  status: number;
  data: Data;
}

interface Data {
  data: null;
  error: Error;
}

interface Error {
  status: number;
  name: string;
  message: string;
  details: null;
}
