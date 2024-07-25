import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

function MapComponent({ location }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries: ['marker'],
  });

  const [map, setMap] = useState(null);
  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
    map.fitBounds(bounds);

    const listener = window.google.maps.event.addListener(map, "idle", () => {
      if (map.getZoom() > 15) map.setZoom(15);
      window.google.maps.event.removeListener(listener);
    });

    setMap(map);
  }, [location]);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat: location.lat, lng: location.lng }}
      zoom={15}
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