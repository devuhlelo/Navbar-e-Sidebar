import React from 'react';
import './SearchBar.css';

function SearchBar({ filters, onFilterChange }) {
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
        <button className="new-btn">+ Novo</button>
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
        <label>
          Marca:
          <input 
            type="text" 
            name="marca" 
            value={filters.marca} 
            onChange={onFilterChange} 
          />
        </label>
        <label>
          Modelo:
          <input 
            type="text" 
            name="modelo" 
            value={filters.modelo} 
            onChange={onFilterChange} 
          />
        </label>
        <label>
          Placa:
          <input 
            type="text" 
            name="placa" 
            value={filters.placa} 
            onChange={onFilterChange} 
          />
        </label>
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