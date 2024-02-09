// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {  startServer } from './server';

startServer();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
