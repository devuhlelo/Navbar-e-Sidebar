import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

function Cadastro({ uniqueOptions }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    frota: '',
    unidade_contrato: '',
    sub_unidade: '',
    marca: '',
    modelo: '',
    especie: '',
    ano: '',
    placa: '',
    renavam: '',
    chassi: '',
    km_atual: '',
    perimetro: '',
    mod_trocado: '',
    validade_dout: '',
    validade_licen: '',
    reg_empresa: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Dados enviados com sucesso!');
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="cadastro-container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2>Cadastro de Nova Vistoria</h2>
        <button className="back-btn" onClick={handleGoBack}>Voltar</button>
      </div>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <label>
          <span>Frota:</span>
          <input 
            type="text" 
            name="frota" 
            value={formData.frota} 
            onChange={handleInputChange} 
          />
        </label>
        
        <label>
          <span>Unidade Contrato:</span>
          <select name="unidade_contrato" value={formData.unidade_contrato} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.unidade_contrato?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Sub Unidade:</span>
          <select name="sub_unidade" value={formData.sub_unidade} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.sub_unidade?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Marca:</span>
          <select name="marca" value={formData.marca} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.marca?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        
        <label>
          <span>Modelo:</span>
          <select name="modelo" value={formData.modelo} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.modelo?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Espécie:</span>
          <select name="especie" value={formData.especie} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.especie?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>
        
        <label>
          <span>Ano:</span>
          <select name="ano" value={formData.ano} onChange={handleInputChange}>
            <option value="">Selecione...</option>
            {uniqueOptions.ano?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Placa:</span>
          <input type="text" name="placa" value={formData.placa} onChange={handleInputChange} />
        </label>
        
        <label>
          <span>Renavam:</span>
          <input type="text" name="renavam" value={formData.renavam} onChange={handleInputChange} />
        </label>

        <label>
          <span>Chassi / Série:</span>
          <input type="text" name="chassi" value={formData.chassi} onChange={handleInputChange} />
        </label>

        <label>
          <span>Km Atual:</span>
          <input type="text" name="km_atual" value={formData.km_atual} onChange={handleInputChange} />
        </label>

        <label>
          <span>Perímetro:</span>
          <input type="text" name="perimetro" value={formData.perimetro} onChange={handleInputChange} />
        </label>
        
        <label>
          <span>Mod. Trocado:</span>
          <input type="text" name="mod_trocado" value={formData.mod_trocado} onChange={handleInputChange} />
        </label>

        <label>
          <span>Validade DOUT:</span>
          <input type="text" name="validade_dout" value={formData.validade_dout} onChange={handleInputChange} />
        </label>

        <label>
          <span>Validade Licen. ANTT:</span>
          <input type="text" name="validade_licen" value={formData.validade_licen} onChange={handleInputChange} />
        </label>

        <label>
          <span>Registro Empresa:</span>
          <input type="text" name="reg_empresa" value={formData.reg_empresa} onChange={handleInputChange} />
        </label>
        
        <button type="submit" className="submit-btn">Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;