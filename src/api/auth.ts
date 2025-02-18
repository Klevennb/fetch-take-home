import { LoginData } from "types/auth";

const API_URL = 'https://frontend-take-home-service.fetch.com';

export const login = async (data: LoginData): Promise<Response> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    credentials: 'include', // Include cookies in the request
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }  

  return response;
};

export const logout = async (): Promise<Response> => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include', // Include cookies in the request
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }
  
  return response;
};
