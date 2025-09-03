import React from 'react';
import './DataTable.css';

function DataTable({ data, dashboardMode }) {
  if (!data || data.length === 0) {
    return <p className="no-data">Nenhum dado encontrado.</p>;
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {!dashboardMode && <th></th>}
            <th>Frota</th>
            {dashboardMode ? <th>Marca</th> : null}
            {dashboardMode ? <th>Unidade Contrato</th> : null}

            {!dashboardMode && (
              <>
                <th>Unidade Contrato</th>
                <th>Sub Unidade</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Espécie</th>
                <th>Ano</th>
                <th>Placa</th>
                <th>Chassi / Série</th>
                <th>Km Atual</th>
                <th>Perímetro</th>
                <th>Mod. Trocado</th>
                <th>Validade DOUT</th>
                <th>Validade Licen. ANTT</th>
                <th>Registro Empresa</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {!dashboardMode && <td><input type="checkbox" /></td>}
              <td>{item.frota}</td>
              {dashboardMode ? <td>{item.marca}</td> : null}
              {dashboardMode ? <td>{item.unidade_contrato}</td> : null}

              {!dashboardMode && (
                <>
                  <td>{item.unidade_contrato}</td>
                  <td>{item.sub_unidade}</td>
                  <td>{item.marca}</td>
                  <td>{item.modelo}</td>
                  <td>{item.especie}</td>
                  <td>{item.ano}</td>
                  <td>{item.placa}</td>
                  <td>{item.chassi}</td>
                  <td>{item.km_atual}</td>
                  <td>{item.perimetro}</td>
                  <td>{item.mod_trocado}</td>
                  <td className="data-vencida">{item.validade_dout}</td>
                  <td className="data-vencida">{item.validade_licen}</td>
                  <td>{item.reg_empresa}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
