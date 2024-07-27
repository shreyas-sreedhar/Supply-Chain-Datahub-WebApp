import "../../app/globals.css";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "../../components/ui/navBar";
import MapComponent from "../../components/Map/maps";
import Map3Dcomponent from "../../components/Map/Map3d";

interface Company {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

interface Location {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
}

const apikey = process.env.NEXT_PUBLIC_GMKEY;

const CompanyDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [company, setCompany] = useState<Company | null>(null);
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('useEffect triggered with id:', id);
    const fetchCompanyDetails = async (companyId: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const [companyRes, locationsRes] = await Promise.all([
          axios.get<Company>(`http://localhost:8000/api/companies/${companyId}`),
          axios.get<Location[]>(`http://localhost:8000/api/companies/${companyId}/location`),
        ]);
        setCompany(companyRes.data);
        setLocations(locationsRes.data);
      } catch (error) {
        console.error(error);
        setError("Failed to load data. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCompanyDetails(id as string);
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error+"error"}
      </div>
    );
  }

  if (!company) {
    return (
      <div className="flex justify-center items-center h-screen">
        Company not found
      </div>
    );
  }

  // Default center of the map
  const defaultCenterLat = locations.length > 0 ? locations[0].latitude : 37.7749;
  const defaultCenterLng = locations.length > 0 ? locations[0].longitude : -122.4194;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push("/")}
          className="mb-4 px-4 py-2 bg-[#0000ff] text-white rounded hover:bg-blue-600 transition-colors"
        >
          &#8592; Back to List
        </button>
        <p className="mt-8 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-800">
          {company.name}
        </p>
        <p className="py-4 text-gray-600 text-s sm:text-xs md:text-xs lg:text-s font-regular tracking-wide mb-8">
          <span className="text-gray-950"> Registered Address: </span> {company.address}
        </p>

        
        <div>
          {company && (
            <Map3Dcomponent
              apiKey={apikey!}
              latitude={company.latitude}
              longitude={company.longitude}
            />
          )}
        </div>
        <h2 className="mt-8 text-base sm:text-s md:text-base lg:text-base font-semibold tracking-tighter text-slate-800 mb-8">
          Other Office Locations: 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <div
              key={location.id}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl text-gray-900 font-semibold mb-2">
                {location.name}
              </h3>
              <p className="text-gray-600 mb-4">{location.address}</p>
              <p className="text-sm text-gray-500 mb-4">
                Lat: {location.latitude.toFixed(4)}, Lng:{" "}
                {location.longitude.toFixed(4)}
              </p>
              <div className="h-64 rounded-lg overflow-hidden">
                <MapComponent
                  location={{ lat: location.latitude, lng: location.longitude }}
                />
              </div>
              <div className="flex flex-col justify-between px-4 mt-4">
                <div className="flex mt-8">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none"
                    aria-label={`View ${location.name} on Google Maps`}
                  >
                    <span>Open in Maps</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="size-4 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;