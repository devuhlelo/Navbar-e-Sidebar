import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';
import Cadastro from './Components/Cadastro/Cadastro';
import mockData from './data/data.json';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [data, setData] = useState([]);
  const [uniqueOptions, setUniqueOptions] = useState({});

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
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppContent isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} theme={theme} setTheme={setTheme} data={data} uniqueOptions={uniqueOptions} />
    </Router>
  );
}

function AppContent({ isSidebarOpen, toggleSidebar, theme, setTheme, data, uniqueOptions }) {
  const location = useLocation();
  const showSidebar = location.pathname !== '/novo';

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="main-layout">
        {showSidebar && (
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard data={data} />} />
            <Route path="/novo" element={<Cadastro uniqueOptions={uniqueOptions} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;