import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

import HomePage from "./pages/home/page.jsx"

function App() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage}/>
      <Routes>
        <Route element={<HomePage language={language} />} path='/' />
      </Routes>
      <Footer language={language} />
    </div>
  );
}

export default App;
