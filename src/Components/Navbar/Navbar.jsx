import React from 'react';
import './Navbar.css';

import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';
import arrow_dropdown from '../../assets/seta-dropdown.png';

const Navbar = ({ theme, setTheme, onLogout }) => {
    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`navbar ${theme}`}>
            <img
                src={theme === 'light' ? logo_light : logo_dark}
                alt='Logo'
                className='logo'
            />

            <ul className='navbar-menu'>
                <li><a href="#">Início</a></li>
                <li className='dropdown'>
                    <a href="#" className='dropdown-link'>
                        Produtos
                        <img
                            src={arrow_dropdown}
                            alt='Seta'
                            className='dropdown-arrow-icon'
                        />
                    </a>
                    <ul className='dropdown-menu'>
                        <li><a href='/frotas'>Frotas</a></li>
                        <li><a href='/linha-amarela'>Linha Amarela</a></li>
                        <li><a href='/servicos'>Serviços</a></li>
                    </ul>
                </li>
                <li><a href="#">Novidades</a></li>
                <li><a href="#">Sobre</a></li>
            </ul>

            <div className='navbar-right'>

                <img
                    onClick={toggle_mode}
                    src={theme === 'light' ? toggle_light : toggle_dark}
                    alt='Toggle Theme'
                    className='toggle-icon'
                />

                <button className='logout-button' onClick={onLogout}>
                    Sair
                </button>
            </div>
        </div>
    );
};

export default Navbar;
