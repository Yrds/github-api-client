import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <Route Path="/" component = {App}>
        </Route>
    </BrowserRouter>
    , document.getElementById("root")
)
