import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ filters, onFilterChange, dashboardMode, setDashboardMode }) {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate('/novo');
  };

  const handleSearchClick = () => {
    navigate('/filtro');
  };

  const handleToggleChange = () => {
    setDashboardMode(prev => !prev); // altera modo no Dashboard
  };

  return (
    <div className="search-bar-container">
      <div className="search-inputs">
        <button className="new-btn" onClick={handleNewClick}>Novo</button>
      </div>

      {/* Switch toggle */}
      <div className="dashboard-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={dashboardMode}
            onChange={handleToggleChange}
          />
          <span className="slider round"></span>
        </label>
        <span className="toggle-label">Filtro Dashboard</span>
      </div>

      <div className="filter-row">
        <label>
          Frota:
          <input type="text" name="frota" value={filters.frota} onChange={onFilterChange} />
        </label>
        <label>
          Placa:
          <input type="text" name="placa" value={filters.placa} onChange={onFilterChange} />
        </label>
        <label>
          Marca:
          <input type="text" name="marca" value={filters.marca} onChange={onFilterChange} />
        </label>
        <label>
          Modelo:
          <input type="text" name="modelo" value={filters.modelo} onChange={onFilterChange} />
        </label>
      </div>

      <div className="filter-buttons">
        <button className="search-btn" onClick={handleSearchClick}>Pesquisar</button>
      </div>
    </div>
  );
}

export default SearchBar;
