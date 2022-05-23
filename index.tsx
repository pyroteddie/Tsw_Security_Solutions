import * as React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from './App';
import HomeScreen from './screens/home';
import AboutScreen from './screens/about';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


ReactDOM.render(
  <App />,
    document.getElementById('root')
);
