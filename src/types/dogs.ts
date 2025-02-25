export interface FetchDogsParams {
    breeds?: string[];
    zipCodes?: string[];
    ageMin?: number;
    ageMax?: number;
    size?: number;
    from?: string;
    sort?: "breed:asc" | "breed:desc" | "name:asc" | "name:desc" | "age:asc" | "age:desc";
  }
  
  export interface FetchDogsResponse {
    resultIds: string[];
    total: number;
    next?: string;
    prev?: string;
  }

  export interface FetchDogBreedsResponse {
    breedResults: string[];
  }

  export interface Dog {
    id: string
    img: string
    name: string
    age: number
    zip_code: string
    breed: string
}

export interface Match {
    match: string
}