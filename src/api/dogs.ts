import { Dog, FetchDogBreedsResponse, FetchDogsParams, FetchDogsResponse, Match } from "types/dogs";

  const API_URL = 'https://frontend-take-home-service.fetch.com'; 
  
  export async function fetchDogs(params: FetchDogsParams = {}): Promise<FetchDogsResponse | null> {
    const queryParams = new URLSearchParams();
  
    if (params.breeds && params.breeds.length) queryParams.append("breeds", params.breeds.join(","));
    if (params.zipCodes && params.zipCodes.length) queryParams.append("zipCodes", params.zipCodes.join(","));
    if (params.ageMin !== undefined) queryParams.append("ageMin", params.ageMin.toString());
    if (params.ageMax !== undefined) queryParams.append("ageMax", params.ageMax.toString());
    queryParams.append("size", (params.size ?? 25).toString());
    if (params.from !== undefined) queryParams.append("from", params.from);
    if (params.sort !== undefined) queryParams.append("sort", params.sort);
  
    const url = `${API_URL}/dogs/search?${queryParams.toString()}`;
    
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data: FetchDogsResponse = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching dogs:", error);
      return null;
    }
  }

  export async function fetchDogBreeds(): Promise<FetchDogBreedsResponse | null> {
    const url = `${API_URL}/dogs/breeds`;
    
  
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();    
      
      return data;
    } catch (error) {
      console.error("Error fetching breeds:", error);
      return null;
    }
  }

  export async function fetchDogDetails(dogIds: string[]): Promise<Dog[] | null> {
    const url = `${API_URL}/dogs`;
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(dogIds),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching dog details:', error);
        return null;
    }
};

export async function fetchDogMatch(dogIds: string[]): Promise<Match | null> {
    const url = `${API_URL}/dogs/match`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(dogIds),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error matching dog:', error);
        return null;
    }
};