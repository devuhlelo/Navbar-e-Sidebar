import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado da sidebar agora está aqui

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      
      <div className={`main-layout ${!isSidebarOpen ? 'sidebar-closed' : ''}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <div className="content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;