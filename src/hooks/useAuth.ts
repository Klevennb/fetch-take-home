

export function useAuth() {
    const isAuthenticated = localStorage.getItem('fetch-access-token') !== null;

    return { isAuthenticated };
}