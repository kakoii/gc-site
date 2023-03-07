import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from '../src/reportWebVitals';
import {Route, Link, HashRouter } from 'react-router-dom'
import Main from '../src/pages/Main.js'
import Login from '../src/pages/Login.js'
import Landing from '../src/pages/Landing.js'
import About from '../src/pages/About.js'
import Minecraft from '../src/pages/Minecraft.js'
import TheBoys from '../src/pages/TheBoys.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <div>
    <Route path="/" component={Main} />
    <Route path="/login" component={Login} />
    <Route path="/landing" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/minecraft" component={Minecraft} />
  </div>
  </HashRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
