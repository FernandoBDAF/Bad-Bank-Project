import React, {useContext} from 'react';
import {AppContext} from '../../utils/Context';
import {Link} from 'react-router-dom';


export default function NavBar () {
  const {authenticated} = useContext(AppContext);

    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">BadBank</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {!authenticated && 
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create-account">Create Account</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/log-in">Login</Link>
                  </li>
                </>
                }
                {authenticated &&
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/deposit">Deposit</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/withdraw">Withdraw</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/loans">Loans</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/payments">Payments</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transfer-money">Transfer</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/transactions">Transactions</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/trade-crypto">Crypto</Link>
                  </li>
                </>
                }
                <li>..............</li>
                <li>
                  <Link className="nav-link" to="#/alldata/">Random Numbers</Link>
                </li>
              </ul>
            </div>
          </nav>
    </>
    )
}