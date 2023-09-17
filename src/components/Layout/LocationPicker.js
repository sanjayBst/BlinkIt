// LocationDetector.js

import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

function LocationDetector() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the Geolocation API is available in the browser
    if ('geolocation' in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // Set up Geocode to use the Google Maps Geocoding API
          Geocode.setApiKey('YOUR_API_KEY'); // Replace with your API key

          try {
            // Perform reverse geocoding to get the address
            const response = await Geocode.fromLatLng(
              latitude.toString(),
              longitude.toString()
            );
            const formattedAddress = response.results[0].formatted_address;
            setAddress(formattedAddress);
          } catch (error) {
            setError('Error fetching address.');
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError('Geolocation is not available in your browser.');
    }
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <h2>Your Current Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          {address && <p>Address: {address}</p>}
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default LocationDetector;
