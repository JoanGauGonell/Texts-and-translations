import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import "./config/i18next.config";
import Header from './components/Header';
import './styles/elements/Body.css';
import CrowdinPage from './components/CrowdinPage';
import TransifexPage from './components/TransifexPage';
import LocalisePage from './components/LocalisePage';
import PhrasePage from './components/PhrasePage';

function Translations(){
  const {t} = useTranslation(["translations"])
  return (
    <div className='Body'>
      <div>
        <h1>{t('title')}</h1>
         <p>{t('internacionalizacion')}</p>
         <p>{t('ventajas')}</p>
       </div>
        <CrowdinPage />
        <TransifexPage />
        <LocalisePage />
        <PhrasePage />
    </div>
    
  );
}

function App() {
  return (
    <Suspense fallback="cargando...">
      <Header />
      <Translations />
    </Suspense>
  );
}

export default App;
