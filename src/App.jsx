// src/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Cadastro from './Components/Cadastro/Cadastro';
import Filtro from './Components/Filtro/Filtro';
import TransferenciaUnidade from './Components/Transferencia/Transferencia';
import Login from './Components/Login/Login';

import mockData from './data/data.json';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme || 'light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [data, setData] = useState([]);
  const [uniqueOptions, setUniqueOptions] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  const isLoginPage = location.pathname === '/login';

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  useEffect(() => {
    setData(mockData);
    const getUniqueValues = (key) => {
      const uniqueSet = new Set(mockData.map(item => item[key]));
      return [''].concat([...uniqueSet].sort());
    };
    setUniqueOptions({
      frota: getUniqueValues('frota'),
      marca: getUniqueValues('marca'),
      modelo: getUniqueValues('modelo'),
      placa: getUniqueValues('placa'),
      unidade_contrato: getUniqueValues('unidade_contrato'),
      sub_unidade: getUniqueValues('sub_unidade'),
      especie: getUniqueValues('especie'),
      ano: getUniqueValues('ano'),
      perimetro: getUniqueValues('perimetro'),
      tipo_frota: getUniqueValues('tipo_frota'),
      frota_cliente: getUniqueValues('frota_cliente'),
      fornecedor_agregado: getUniqueValues('fornecedor_agregado'),
    });
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  return (
    <div className={`container ${theme}`}>
      {!isLoginPage && (
        <Navbar theme={theme} setTheme={setTheme} onLogout={handleLogout} />
      )}

      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/"
          element={
            <PrivateRoute>
              <div className="main-layout">
                <AppContent
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                  theme={theme}
                  data={data}
                  uniqueOptions={uniqueOptions}
                />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/novo"
          element={
            <PrivateRoute>
              <div className="main-layout">
                <Cadastro uniqueOptions={uniqueOptions} />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/filtro"
          element={
            <PrivateRoute>
              <div className="main-layout">
                <Filtro uniqueOptions={uniqueOptions} />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/transferencia"
          element={
            <PrivateRoute>
              <div className="main-layout">
                <TransferenciaUnidade data={data} uniqueOptions={uniqueOptions} />
              </div>
            </PrivateRoute>
          }
        />

        {/* catch-all: se não logado, redireciona para login */}
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? '/' : '/login'} />}
        />
      </Routes>

      {!isLoginPage && (
        <div className="footer">
          <footer>
            <address>© 2025 Eduford Frotas - Todos os direitos reservados.</address>
          </footer>
        </div>
      )}
    </div>
  );
}

function AppContent({ isSidebarOpen, toggleSidebar, theme, data, uniqueOptions }) {
  return (
    <>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} theme={theme} />
      <div className="content">
        <Dashboard data={data} theme={theme} />
      </div>
    </>
  );
}

export default App;
