import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext'
import {BookContextProvider} from './context/BookContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
  <BookContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BookContextProvider>
  </BrowserRouter>
,
 document.getElementById('root'));