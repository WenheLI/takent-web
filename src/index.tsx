import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Dashboard from './Pages/Dashboard';
import NotFoundPage from './Pages/404/index';
import SignInSide from './Pages/Signin';
import SignUp from './Pages/Signup';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3F2F6'
    },
    secondary: {
      main: '#4318FF',
    }
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/signin' element={<SignInSide />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
