import React, { useState } from 'react';
import './Login.css';
import meuFundo from '../../assets/fundo-login.png';
import logoLogin from '../../assets/logo-tela-login.png';
import usuarioIcon from '../../assets/img-usuario.png';
import senhaIcon from '../../assets/cadeado.png';
import { Link } from 'react-router-dom';


export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (username === 'admin' && password === '123') {
            onLogin(true);
        } else {
            setError('Usuário ou senha inválidos.');
        }
    };

    return (
        <div
            className="login-wrapper"
            style={{ backgroundImage: `url(${meuFundo})` }}
        >
            <form onSubmit={handleSubmit} className="login-form">
                <img src={logoLogin} alt="Logo Sisgen Frotas" className="login-logo" />

                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <label htmlFor="username">Usuário:</label>
                    <div className="input-icon-wrapper">
                        <img src={usuarioIcon} alt="Ícone usuário" className="input-icon" />
                        <input
                            type="text"
                            id="username"
                            placeholder='Usuário'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <div className="input-icon-wrapper">
                        <img src={senhaIcon} alt="Ícone senha" className="input-icon" />
                        <input
                            type="password"
                            id="password"
                            value={password}
                            placeholder='Senha'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <button type="submit" className="login-button">
                    Entrar
                </button>

                <h1 className="forgot-password">
                    <Link to="#">Esqueceu a senha?</Link>
                </h1>

                <p className="developer-credit">
                    Desenvolvido com ♥ por <a href="https://uhlelo.com.br/" target="_blank" rel="noopener noreferrer">uHLelo</a>
                </p>

            </form>

        </div>
    );
}
