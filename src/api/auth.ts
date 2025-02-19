import { UserData } from "types/auth";

const API_URL = 'https://frontend-take-home-service.fetch.com';  // Not moving to .env to keep start up of reviewer easy

export const login = async (data: UserData): Promise<Response> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return response;
};

export const logout = async (): Promise<Response> => {
    const response = await fetch(`${API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Logout failed');
    }

    return response;
};
