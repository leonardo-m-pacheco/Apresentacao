import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/ProjetoPortifolio/App';

import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PageVelocidade from './Routes/ProjetoPortifolio/pages/Home/Conversões/PageVelocidade';
import PageImc from './Routes/ProjetoPortifolio/pages/Home/Conversões/PageImc'
import PageSobremim from './Routes/ProjetoPortifolio/pages/Home/Sobre mim/PageSobremim'
import PagePeso from './Routes/ProjetoPortifolio/pages/Home/Conversões/PagePeso'




ReactDOM.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/Velocidade" element={<PageVelocidade/> } />
      <Route path="/Imc" element={<PageImc />} />
      <Route path="/Sobremim" element={<PageSobremim />} />
      <Route path="/Peso" element={<PagePeso />} />
      
     
      

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

