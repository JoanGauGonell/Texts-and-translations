import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import "./config/i18next.config";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ManageAccountPage from './components/ManageAccountPage';
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>

  <Router>

    <Routes>
    
    <Route path="/manage-account" element={<ManageAccountPage />} />

          <Route path="/" element={<App />}>
      </Route>
    </Routes>
  </Router>
</Provider>,

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
