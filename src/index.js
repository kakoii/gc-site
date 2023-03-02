import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from '../src/reportWebVitals';
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom'
import Main from '../src/pages/Main.js'
import Login from '../src/pages/Login.js'
import Landing from '../src/pages/Landing.js'
import About from '../src/pages/About.js'
import Minecraft from '../src/pages/Minecraft.js'
import TheBoys from '../src/pages/TheBoys.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <HashRouter basename="/"></HashRouter>
  <Routes>
    <Route index element={<Main />} />
    <Route path="/login" element={<Login />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/about" element={<About />} />
    <Route path="/minecraft" element={<Minecraft />} />
    <Route path="/theboys" element={<TheBoys />} />
  </Routes>
  </HashRouter>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
