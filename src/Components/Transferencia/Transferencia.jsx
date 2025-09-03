import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Transferencia.css';

export default function TransferenciaUnidade({ data, uniqueOptions }) {
  const [frota, setFrota] = useState('');
  const [novaUnidade, setNovaUnidade] = useState('');
  const [veiculoEncontrado, setVeiculoEncontrado] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const veiculo = data.find(v => v.frota === frota);
    if (veiculo) {
      setVeiculoEncontrado(veiculo);
      setNovaUnidade(''); 
    } else {
      alert('Veículo não encontrado para essa frota.');
      setVeiculoEncontrado(null);
    }
  };

  const handleTransfer = () => {
    if (veiculoEncontrado && novaUnidade) {
      console.log(`Veículo de frota ${frota} transferido para a unidade: ${novaUnidade}`);
      alert(`Transferência de frota ${frota} para a unidade ${novaUnidade} realizada com sucesso!`);
    } else {
      alert('Por favor, busque uma frota e selecione uma nova unidade.');
    }
  };

  return (
    <div className="transferencia-container">
      <button className="btn-voltar" onClick={() => navigate(-1)}>← Voltar</button>

      <h2>Transferência de Unidade</h2>

      <form onSubmit={handleSearch} className="search-form">
        <label htmlFor="frota-search">Buscar por Frota:</label>
        <input
          id="frota-search"
          type="text"
          value={frota}
          onChange={(e) => setFrota(e.target.value)}
          placeholder="Digite o número da frota"
        />
        <button type="submit">Buscar</button>
      </form>

      {veiculoEncontrado && (
        <div className="veiculo-details">
          <h3>Detalhes do Veículo</h3>
          <p><strong>Frota:</strong> {veiculoEncontrado.frota}</p>
          <p><strong>Placa:</strong> {veiculoEncontrado.placa}</p>
          <p><strong>Unidade Atual:</strong> {veiculoEncontrado.unidade_contrato}</p>

          <div className="transfer-form">
            <label htmlFor="nova-unidade">Transferir para a Unidade:</label>
            <select
              id="nova-unidade"
              value={novaUnidade}
              onChange={(e) => setNovaUnidade(e.target.value)}
            >
              <option value="">Selecione a nova unidade</option>
              {uniqueOptions.unidade_contrato.map((unidade, index) => (
                unidade !== veiculoEncontrado.unidade_contrato && unidade !== '' && (
                  <option key={index} value={unidade}>{unidade}</option>
                )
              ))}
            </select>
            <button type="button" onClick={handleTransfer}>Confirmar Transferência</button>
          </div>
        </div>
      )}
    </div>
  );
}
