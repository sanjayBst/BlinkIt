

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
    <div className='px-3 md:text-xs sm:text-[10px]'>
      {location ? (
        <div>
         
          <p className='font-bold ' >Delivery in 12 minutes</p>
          <p className='font-extrathin text-xs'>Dummy Address</p>
    
        </div>
      ) : error ? (
        <p  >Error: {error}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default LocationDetector;
