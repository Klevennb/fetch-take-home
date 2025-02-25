import { LocationSearchParams, UserLocationResponse } from "types/locations";

const API_URL = 'https://frontend-take-home-service.fetch.com'; 

export async function fetchLocations(zipCodes: string[]): Promise<Location[] | null> {
    const url = `${API_URL}/locations`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(zipCodes),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching locations:', error);
        return null;
    }
};

export async function fetchLocationSearch(params: LocationSearchParams): Promise<{ results: UserLocationResponse[]; total: number } | null>{
    const url = `${API_URL}/locations/search`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error searching locations:', error);
        return null;
    }
};