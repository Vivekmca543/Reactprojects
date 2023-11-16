import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';
const domNode = document.getElementById('root');
console.log("## ----->>>> ",domNode);
const root = createRoot(domNode);
root.render(

<App />

);