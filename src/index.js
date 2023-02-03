import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './gc-site/src/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './gc-site/src/pages/Main.js'
import Login from './gc-site/src/pages/Login.js'
import Landing from './gc-site/src/pages/Landing.js'
import About from './gc-site/src/pages/About.js'
import Minecraft from './gc-site/src/pages/Minecraft.js'
import TheBoys from './gc-site/src/pages/TheBoys.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route index element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/about" element={<About />} />
    <Route path="/minecraft" element={<Minecraft />} />
    <Route path="/theboys" element={<TheBoys />} />
  </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
