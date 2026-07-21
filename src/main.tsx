import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './index.css';
import { App } from './app/App';

const wurzel = document.getElementById('root');
if (!wurzel) throw new Error('Root-Element nicht gefunden.');

createRoot(wurzel).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
