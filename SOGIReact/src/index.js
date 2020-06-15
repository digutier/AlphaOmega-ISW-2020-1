import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './componentes/footer/Footer';
import BarraNav from './componentes/navBar/navBar';
import MainPage from './componentes/header/mainPage/MainPage';
import Problems from './componentes/body/problems/Problems';
import Solutions from './componentes/body/solutions/Solutions';
import Team from './componentes/body/team/Team';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './others.js';
ReactDOM.render(
  <React.StrictMode>
    <BarraNav />
    <MainPage />
    <Problems />
    <Solutions />
    <Team />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
