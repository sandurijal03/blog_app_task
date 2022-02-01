import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = document.querySelector('#root');
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root,
);
