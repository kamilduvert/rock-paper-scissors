import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/index.scss';

const rootElement = document.getElementById('app');
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement);