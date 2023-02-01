import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>);
registerServiceWorker();

