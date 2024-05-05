import React, {useContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './utils/Context';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Home from './pages/Home';
import AllData from './pages/AllData';
import NavBar from './layout/navbar/NavBar';
import Footer from './layout/footer/Footer';
import Loans from './pages/Loans';
import Payments from './pages/Payments';
import TransferMoney from './pages/TransferMoney';
import TradeCrypto from './pages/TradeCrypto';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <AppProvider>
        <Router>
        <div className="d-flex flex-column min-vh-100"> {/* Flex container with Bootstrap */}
        <NavBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/trade-crypto" element={<TradeCrypto />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/transfer-money" element={<TransferMoney />} />
            <Route path="/all-data" element={<AllData />} />
          </Routes>
        </div>
        <Footer />
      </div>
        </Router>
      </AppProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
