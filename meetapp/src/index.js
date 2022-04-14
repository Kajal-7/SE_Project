import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "./components/Cards/Cards.js"
// import Card from "./components/Cards/Cards.js"


ReactDOM.render(
    <>
    {/* <GlobalStyles /> */}
    <App />
    </>
    , document.getElementById('root'));
