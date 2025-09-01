import React, { useState } from 'react';
import './Filtro.css';
import { useNavigate } from 'react-router-dom';

function Filtro({ uniqueOptions }) { 

  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    dataCadastro: '',
    tipoFrota: '',
    frota: '',
    frotaCliente: '',
    placa: '',
    unidadeContrato: '',
    diversasFrotas: '',
    fornecedorAgregado: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleSearch = () => {
    console.log('Filtros aplicados:', filters);
    navigate('/'); 
  };
  
  const handleGoBack = () => {
      navigate('/'); 
  };

  return (
    <div className="filtro-container">
      <div className="filtro-header">
        <h2>Relatórios de veículos</h2>
        <span>01/09/2025</span>
      </div>
      <div className="filtro-campos">
        <div className="filtro-grupo">
          <label>
            Dt. Cadastro:
            <input type="date" name="dataCadastro" value={filters.dataCadastro} onChange={handleInputChange} />
          </label>
          <label>
            Tipo Frota:
            <select name="tipoFrota" value={filters.tipoFrota} onChange={handleInputChange}>
              <option value="">- Selecionar -</option>
              {uniqueOptions.tipo_frota?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filtro-grupo">
          <label>
            Frota:
            <input type="text" name="frota" value={filters.frota} onChange={handleInputChange} />
          </label>
          <label>
            Frota Cliente:
            <select name="frotaCliente" value={filters.frotaCliente} onChange={handleInputChange}>
              <option value="">- Selecionar -</option>
              {uniqueOptions.frota_cliente?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filtro-grupo">
          <label>
            Placa:
            <select name="placa" value={filters.placa} onChange={handleInputChange}>
              <option value="">- Selecionar -</option>
              {uniqueOptions.placa?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
          <label>
            Unidade Contrato:
            <select name="unidadeContrato" value={filters.unidadeContrato} onChange={handleInputChange}>
              <option value="">- Selecionar -</option>
              {uniqueOptions.unidade_contrato?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="filtro-grupo">
          <label>
            Diversas Frotas:
            <input type="text" name="diversasFrotas" value={filters.diversasFrotas} onChange={handleInputChange} />
          </label>
          <label>
            Fornecedor Agregado:
            <select name="fornecedorAgregado" value={filters.fornecedorAgregado} onChange={handleInputChange}>
              <option value="">- Selecione -</option>
              {uniqueOptions.fornecedor_agregado?.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="filtro-botoes">
        <button className="pesquisar-btn" onClick={handleSearch}>Pesquisar</button>
        <button className="limpar-btn">Limpar</button>
        <button className="salvar-btn">Salvar filtro</button>
        <button className="voltar-btn" onClick={handleGoBack}>Voltar</button>
      </div>
    </div>
  );
}

export default Filtro;