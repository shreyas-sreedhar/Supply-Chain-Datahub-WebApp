// pages/companies/[id].tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import dynamic from 'next/dynamic';
import Navbar from '../../components/ui/navBar';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
// import Mapc

// const Map = dynamic(() => import('../../components/Map/maps'), { ssr: false });

const API_KEY = process.env.GOOGLE_MAPS_API_KEY
interface Company {
  id: string;
  name: string;
  address: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

const CompanyDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [company, setCompany] = useState<Company | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (id) {
      axios.get<Company>(`http://localhost:8000/api/companies/${id}`)
        .then(response => setCompany(response.data))
        .catch(error => console.error(error));

      axios.get<Location[]>(`http://localhost:8000/api/companies/${id}/location`)
        .then(response => setLocations(response.data))
        .catch(error => console.error(error));
    }
  }, [id]);
  console.log('Locations:', locations);
  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
     


  {/* <APIProvider apiKey={API_KEY}>
    <Map
    //   style={{width: '100vw', height: '100vh'}}
    className = "w-full h-full"
      defaultCenter={{lat: 22.54992, lng: 0}}
      defaultZoom={3}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
  </APIProvider> */}
);
      <button onClick={() => router.push('/')}>Back to List</button>
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      {/* <Map locations={locations} />
       */}
       <MapComponent/>
      <ul>
        {locations.map(location => (
          <li key={location.id}>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <p>Lat: {location.latitude}, Lng: {location.longitude}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyDetails;