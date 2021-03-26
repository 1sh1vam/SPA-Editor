import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from "./globalStyle"
import { TreeContextProvider } from "./context/tree"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <TreeContextProvider>
      <App />
    </TreeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

