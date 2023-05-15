import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './components/Context';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
 <ProductProvider>
   <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
   </BrowserRouter>
  
 </ProductProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
