interface Coordinates {
    lat: number;
    lon: number;
}

export interface LocationSearchParams {
    city?: string;
    states?: string[];
    geoBoundingBox?: {
        top?: Coordinates;
        left?: Coordinates;
        bottom?: Coordinates;
        right?: Coordinates;
        bottom_left?: Coordinates;
        bottom_right?: Coordinates;
        top_left?: Coordinates;
        top_right?: Coordinates;
    };
    size?: number;
    from?: number;
}

export interface UserLocationResponse {
    latitude: number | null;
    longitude: number | null;
    zip_code?: string | null;
    error?: string;
}

export interface UserLocation {
    latitude: number | null;
    longitude: number | null;
    zipCode?: string | null;
    error?: string;
}