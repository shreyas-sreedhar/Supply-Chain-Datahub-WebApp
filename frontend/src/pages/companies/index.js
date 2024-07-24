import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    axios.get('http://localhost:8000/api/companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleSearch = useCallback((event) => {
    setSearch(event.target.value);
  }, [setSearch]);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigateToDetails = useCallback((id) => {
    router.push(`/companies/${id}`);
  }, [router]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredCompanies.map(company => (
          <li key={company.company_id} onClick={() => navigateToDetails(company.company_id)}>
            <h3>{company.name}</h3>
            <p>{company.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyList;