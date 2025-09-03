import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import SearchBar from './SearchBar';
import './Dashboard.css';

function Dashboard({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [dashboardMode, setDashboardMode] = useState(false); 

  const [filters, setFilters] = useState({
    frota: '',
    placa: '',
    marca: '',
    modelo: '',
    busca_rapida: '',
    unidade_contrato: '',
  });

  useEffect(() => {
    const applyFilters = () => {
      const newFilteredData = data.filter(item => {
        const matchesFrota = item.frota.toLowerCase().includes(filters.frota.toLowerCase());
        const matchesPlaca = item.placa.toLowerCase().includes(filters.placa.toLowerCase());
        const matchesMarca = item.marca.toLowerCase().includes(filters.marca.toLowerCase());
        const matchesModelo = item.modelo.toLowerCase().includes(filters.modelo.toLowerCase());
        const matchesBuscaRapida =
          item.frota.toLowerCase().includes(filters.busca_rapida.toLowerCase()) ||
          item.placa.toLowerCase().includes(filters.busca_rapida.toLowerCase()) ||
          item.marca.toLowerCase().includes(filters.busca_rapida.toLowerCase()) ||
          item.modelo.toLowerCase().includes(filters.busca_rapida.toLowerCase());

        return matchesFrota && matchesPlaca && matchesMarca && matchesModelo && matchesBuscaRapida;
      });
      setFilteredData(newFilteredData);
    };

    applyFilters();
  }, [data, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="dashboard-container">
      <SearchBar
        filters={filters}
        onFilterChange={handleFilterChange}
        dashboardMode={dashboardMode}
        setDashboardMode={setDashboardMode} 
      />

      <DataTable data={filteredData} dashboardMode={dashboardMode} />
    </div>
  );
}

export default Dashboard;
