import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar({ filters, onFilterChange }) {
  const navigate = useNavigate();

  const handleNewClick = () => {
    navigate('/novo');
  };

  return (
    <div className="search-bar-container">
      <div className="search-inputs">
        <input 
          type="text" 
          placeholder="Busca Rápida" 
          name="busca_rapida" 
          value={filters.busca_rapida} 
          onChange={onFilterChange} 
        />
        <button className="new-btn" onClick={handleNewClick}>+ Novo</button>
      </div>
      
      {/* Resto do seu código... */}
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
        {/* ...outros inputs... */}
      </div>
      <div className="filter-buttons">
        <button className="search-btn">Pesquisar</button>
        <button className="columns-btn">Colunas</button>
        <button className="export-btn">Exportar</button>
      </div>
    </div>
  );
}

export default SearchBar;