import React from "react";
import "./Sidebar.css";
import setaSide from "../../assets/seta-side.png";

export default function Sidebar({ isOpen, toggleSidebar, theme }) { 
  return (
    <>
      <div className={`sidebar ${!isOpen ? "closed" : ""} ${theme}`}>
        <h2>Menu</h2>
        <a href="/">Inicio</a>
        <a href="#">Projetos</a>
        <a href="/novo">Cadastrar Veiculos</a>
        <a href="#">Linha Amarela</a>
        <a href="#">Serviços</a>
        <a href="#">Manutenção</a>
        <a href="/transferencia">Transferência de Unidade </a>
      </div>
      <img
        src={setaSide}
        alt="Abrir/Fechar"
        className={`toggle-sidebar ${!isOpen ? "rotated" : ""}`}
        onClick={toggleSidebar}
      />
    </>
  );
}