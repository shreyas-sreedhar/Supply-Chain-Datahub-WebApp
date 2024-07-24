// pages/companies/[id].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../../components/Map/maps'), { ssr: false });

const CompanyDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [company, setCompany] = useState(null);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8000/api/companies/${id}`)
                .then(response => setCompany(response.data))
                .catch(error => console.error(error));

            axios.get(`http://localhost:8000/api/companies/${id}/location`)
                .then(response => setLocations(response.data))
                .catch(error => console.error(error));
        }
    }, [id]);

    if (!company) return <div>Loading...</div>;

    return (
        <div>
            <button onClick={() => router.push('/companies')}>Back to List</button>
            <h1>{company.name}</h1>
            <p>{company.address}</p>
            <Map locations={locations} />
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
