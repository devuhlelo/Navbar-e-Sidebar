import React from "react";
import "./Sidebar.css";
import setaSide from "../../assets/seta-side.png";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className={`sidebar ${!isOpen ? "closed" : ""}`}>
        <h2>Menu</h2>
        <a href="#">Inicio</a>
        <a href="#">Projetos</a>
        <a href="#">Parceiros</a>
        <a href="#">Contato</a>
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