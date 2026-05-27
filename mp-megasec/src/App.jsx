import { useState, useEffect, useRef } from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Crm from './components/Crm'
import Financeiro from './components/Financeiro'
import ConfiguracoesGerais from './components/ConfiguracoesGerais'
import Sidebar from './components/Sidebar'

export default function App() {
  const [logado, setLogado] = useState(!!localStorage.getItem('token'));
  const [paginaHome, setPaginaHome] = useState('Home');

  const realizarLogin = (token) => {
    localStorage.setItem('token', token); 
    setLogado(true);
  };

  const fazerLogout = () => {
    localStorage.removeItem('token'); 
    setLogado(false);          
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        {!logado && <Login aoLogar={realizarLogin} />}
        {logado && (
        <>
          {logado && <Sidebar mudarDePagina={setPaginaHome} aoSair={fazerLogout} />}
          <main style={{ flex: 1, height: '100%' }}>
            {paginaHome === 'Home' && <Home />}
            {paginaHome === 'Portabilidade' && <Crm />}
            {paginaHome === 'CadastroPortabilidade' && <Financeiro />}
            {paginaHome === 'PortabilidadesConcluidas' && <ConfiguracoesGerais />}
          </main>
        </>
      )}
    </div>
  )
}