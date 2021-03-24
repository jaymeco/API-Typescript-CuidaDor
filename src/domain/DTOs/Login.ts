export interface ILoginRequestDTO {
  email: string;
  password: string;
}

export interface ILoginResponseDTO<T = object> {
  token: string;
  role: string;
  user: T;
}
