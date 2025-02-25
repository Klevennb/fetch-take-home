import { useState, useEffect } from "react";
import { fetchLocationSearch } from "../api/locations";
import { UserLocation } from "types/locations";

const useUserLocation = (): UserLocation => {
    const [location, setLocation] = useState<UserLocation>({
        latitude: null,
        longitude: null,
        zipCode: null,
        error: undefined,
    });

    useEffect(() => {
        if (!navigator.geolocation) {
            setLocation((prev) => ({ ...prev, error: "Geolocation is not supported by your browser" }));
            return;
        }

        const success = async (position: GeolocationPosition) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            setLocation((prev) => ({ ...prev, latitude, longitude }));
                const distanceInDegrees = 5 / 69;  // Rough conversion of 5 miles to degrees

            // Fetch ZIP code from location search API
            const locationResponse = await fetchLocationSearch({
                geoBoundingBox: {
                    top_left: { lat: latitude + distanceInDegrees, lon: longitude - distanceInDegrees },
                    bottom_right: { lat: latitude - distanceInDegrees, lon: longitude + distanceInDegrees },
                },
                size: 1,
            });            

            if (locationResponse?.results.length) {               
                setLocation((prev) => ({
                    ...prev,
                    zipCode: locationResponse.results[0].zip_code,
                }));
            }
        };

        const error = (err: GeolocationPositionError) => {
            setLocation((prev) => ({ ...prev, error: err.message }));
        };

        const watcher = navigator.geolocation.watchPosition(success, error);

        return () => navigator.geolocation.clearWatch(watcher);
    }, []);

    return location;
};

export default useUserLocation;

