import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import SearchBar from './SearchBar';
import './Dashboard.css';

function Dashboard({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    frota: '',
    placa: '',
    marca: '',
    modelo: ''
  });

  useEffect(() => {
    const applyFilters = () => {
      const newFilteredData = data.filter(item => {
        const matchesFrota = item.frota.toLowerCase().includes(filters.frota.toLowerCase());
        const matchesPlaca = item.placa.toLowerCase().includes(filters.placa.toLowerCase());
        const matchesMarca = item.marca.toLowerCase().includes(filters.marca.toLowerCase());
        const matchesModelo = item.modelo.toLowerCase().includes(filters.modelo.toLowerCase());

        return matchesFrota && matchesPlaca && matchesMarca && matchesModelo;
      });
      setFilteredData(newFilteredData);
    };

    applyFilters();
  }, [data, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="dashboard-container">
      <SearchBar filters={filters} onFilterChange={handleFilterChange} />
      <DataTable data={filteredData} />
    </div>
  );
}

export default Dashboard;