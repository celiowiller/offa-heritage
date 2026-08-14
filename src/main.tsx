import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Elemento root não encontrado no DOM');
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  } catch (error) {
    console.error('Erro ao renderizar o React:', error);
    rootElement.innerHTML = `<div style="color:red; padding:20px; font-family:sans-serif;">
      <h2>Erro na inicialização do React</h2>
      <pre>${error}</pre>
    </div>`;
  }
}