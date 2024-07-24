// components/Map.js
import React, { useEffect } from 'react';
import L from 'leaflet';

const Map = ({ locations }) => {
    useEffect(() => {
        const map = L.map('map').setView([locations[0].latitude, locations[0].longitude], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        locations.forEach(location => {
            L.marker([location.latitude, location.longitude])
                .addTo(map)
                .bindPopup(`<b>${location.name}</b><br>${location.address}`);
        });

        return () => map.remove();
    }, [locations]);

    return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Map;
