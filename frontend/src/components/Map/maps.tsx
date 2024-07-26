import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

interface Props {
  location: {
    lat: number;
    lng: number;
  };
}

const containerStyle: React.CSSProperties = {
  width: "w-full",
  height: "400px"
};

function MapComponent({ location }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMKEY!,
    libraries: ['marker'],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
    map.fitBounds(bounds);

    const listener = window.google.maps.event.addListener(map, "idle", () => {
      if (map) map.setZoom(15);
      window.google.maps.event.removeListener(listener);
    });

    setMap(map);
  }, [location]);

  const onUnmount = useCallback((map: google.maps.Map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: location.lat, lng: location.lng }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {map && (
        <Marker
          position={{ lat: location.lat, lng: location.lng }}
        >
          <div>Custom Marker Content</div>
        </Marker>
      )}
    </GoogleMap>


  ) : <></>;
}

export default React.memo(MapComponent);
