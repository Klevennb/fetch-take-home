import { useState, useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';
import { UserData } from 'types/auth';
import {login as loginApi, logout as logoutApi} from 'api/auth';

export function useAuth() {
    const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    localStorage.getItem('user') !== null
  );

  // Get remaining token duration
  const getTokenDuration = (): number => {
    const storedExpirationDate = localStorage.getItem('expiration');
    if (!storedExpirationDate) return -1;

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    return expirationDate.getTime() - now.getTime();
  };

  // Store user data in local storage on login
   const login = async (user: UserData) => {
    loginApi(user)
    
    localStorage.setItem('user', JSON.stringify(user));
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  // Remove items from local storage and redirect on logout
  const logout = (): void => {
    logoutApi();
    localStorage.removeItem('user');
    localStorage.removeItem('expiration');
    setIsAuthenticated(false);
    navigate('/');
  };

  // Get user data from local storage and check validate expiration
  const getUser = (): UserData | null => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return null;

    const user: UserData = JSON.parse(storedUser);
    const tokenDuration = getTokenDuration();

    if (tokenDuration < 0) {
      logout();
      return null;
    }

    return user;
  };

  // Auto-check authentication status when component mounts
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem('user') !== null);
  }, []);

  return { isAuthenticated, login, logout, getUser, getTokenDuration };
}
