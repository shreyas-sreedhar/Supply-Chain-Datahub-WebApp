import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useState } from 'react';

interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

interface Props {
  locations: Location[];
  centerLat: number;
  centerLng: number;
}

const BigMap: React.FC<Props> = ({ locations, centerLat, centerLng }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-screen w-full">
      <GoogleMap
        zoom={6}
        center={{ lat: centerLat, lng: centerLng }}
        mapContainerStyle={{ width: '100%', height: '300px' }}
        options={{
          disableDefaultUI: true,
          clickableIcons: true,
          scrollwheel: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={{ lat: location.latitude, lng: location.longitude }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default BigMap;
