import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ filters, onFilterChange }) {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate('/novo');
  };

  const handleSearchClick = () => {
    navigate('/filtro');
  };

  return (
    <div className="search-bar-container">
      <div className="search-inputs">
        <button className="new-btn" onClick={handleNewClick}>Novo</button>
        <input
          type="text"
          placeholder="Busca Rápida"
          name="busca_rapida"
          value={filters.busca_rapida}
          onChange={onFilterChange}
        />

      </div>

      <div className="filter-row">
        <label>
          Frota:
          <input
            type="text"
            name="frota"
            value={filters.frota}
            onChange={onFilterChange}
          />
        </label>
      </div>
      <div className="filter-buttons">
        <button className="search-btn" onClick={handleSearchClick}>Pesquisar</button>
      </div>
    </div>
  );
}

export default SearchBar;