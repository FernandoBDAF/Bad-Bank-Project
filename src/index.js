import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './utils/Context';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            {/* <Route path="/balance" element={<Balance />} /> */}
          </Routes>
        </Router>
            {/* <Route path="/CreateAccount/" component={CreateAccount} /> */}
            {/* <Route path="/login/" component={Login} /> */}
            {/* <Route path="/components/" component={Deposit} /> */}
            {/* <Route path="/components/" component={Withdraw} /> */}
            {/* <Route path="/balance/" component={Balance} /> */}
            {/* <Route path="/alldata/" component={AllData} /> */}
      </AppProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
