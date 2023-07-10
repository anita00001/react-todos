import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import TodoApp from './components/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
);
