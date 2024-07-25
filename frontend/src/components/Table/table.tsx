import React from 'react';

interface Props {
  locations: Location[];
}

const TableComponent: React.FC<Props> = ({ locations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {locations.map(location => (
        <div key={location.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
          <p className="text-gray-600 mb-4">{location.address}</p>
          <p className="text-sm text-gray-500 mb-4">
            Lat: {location.latitude.toFixed(4)}, Lng: {location.longitude.toFixed(4)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TableComponent;