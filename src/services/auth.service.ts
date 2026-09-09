import type { LoginRequest, LoginResponse } from '@/models/auth/auth.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function authenticate(
  payload: LoginRequest
): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Falha ao autenticar usuário');
  }

  return response.json();
}
