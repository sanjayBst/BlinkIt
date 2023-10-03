

import React, { useEffect, useState } from 'react';

function LocationDetector() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

      
        },
        (err) => {
          setError("user denied access");
        }
      );
    } else {
      setError('Geolocation is not available in your browser.');
    }
  }, []);

  return (
    <div className='p-3'>
      {location ? (
        <div>
         
          <p> {location.latitude}</p>
          <p> {location.longitude}</p>
    
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
