import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from './App';
import Agb from './components/Agb';
import Bots from './components/Bots';
import Daten from './components/Daten';
import Imprissum from './components/Imprissum';
import Infos from './components/Infos';
import Navbar from './components/Navbar';
import SoFunk from './components/SoFunk';
import Sponsor from './components/Sponsor';
import Team from './components/Team';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/funktionierts" exact element={<SoFunk />} />
        <Route path="/infos" exact element={<Infos />} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/sponsorinnen" exact element={<Sponsor />} />
        <Route path="/botschafter" exact element={<Bots />} />
        <Route path="/agb" exact element={<Agb />} />
        <Route path="/datenschutz" exact element={<Daten />} />
        <Route path="/imprissum" exact element={<Imprissum />} />


      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


