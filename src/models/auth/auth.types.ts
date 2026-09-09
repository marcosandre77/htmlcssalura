export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}
