import React from 'react';
import './Navbar.css';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import arrow_dropdown from '../../assets/seta-dropdown.png'; // Importe o ícone da seta

const Navbar = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <div className='navbar'>
            <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className='logo' />

            <ul className="navbar-menu">
                <li>Início</li>
                <li className="dropdown">
                    <a href="#" className="dropdown-link"> 
                        Produtos <img src={arrow_dropdown} alt="Seta" className="dropdown-arrow-icon" /> {/* Ícone da seta */}
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/eletronicos">Frotas</a></li>
                        <li><a href="/roupas">Linha Amarela</a></li>
                        <li><a href="/livros">Serviços</a></li>
                    </ul>
                </li>
                <li>Novidades</li>
                <li>Sobre</li>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Pesquisar' />
                <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search Icon" />
            </div>

            <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt="Toggle Theme" className='toggle-icon' />
        </div>
    );
};

export default Navbar;