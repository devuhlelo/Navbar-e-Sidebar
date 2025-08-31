import React, { useState } from "react";
import "./Sidebar.css";
import setaSide from "../../assets/seta-side.png"; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Menu</h2>
        <a href="#">Inicio</a>
        <a href="#">Projetos</a>
        <a href="#">Parceiros</a>
        <a href="#">Contato</a>
      </div>

      {/* Botão (seta) */}
      <img
        src={setaSide}
        alt="Abrir/Fechar"
        className={`toggle-sidebar ${isOpen ? "rotated" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
}
