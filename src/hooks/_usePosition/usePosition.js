import { useState, useEffect } from 'react';
export const usePosition = () => {
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    const onChange = ({ coords }) => {
        setPosition({
            lat: coords.latitude,
            lon: coords.longitude,
            valid: true
        });
    };
    const onError = (error) => {
        setError(error.message);
    };
    useEffect(() => {
        const currentLocation = navigator.geolocation;
        if (!currentLocation) {
            setError('Geolocation is not supported, Please verify your browser current location is enabled or not');
            return;
        }
        let watcher = currentLocation.watchPosition(onChange, onError);
        return () => currentLocation.clearWatch(watcher);
    }, []);
    return { ...position, error };
};