import React, { useContext } from "react";
import { AppContext } from "../../utils/Context";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function NavBar() {
  const { authenticated } = useContext(AppContext);

  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light px-4">
        <NavLink
          className="navbar-brand icon-link icon-link-hover "
          style={{ "--bs-link-hover-color-rgb": "25, 135, 84" }}
          to="/"
        >
          BadBank
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills">
            {!authenticated && (
              <>
                <li className="nav-item menuButton">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link  active text-white" : "nav-link hoverEffect"
                    }
                    to="/create-account"
                  >
                    Create Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/log-in"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {authenticated && (
              <>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/deposit"
                  >
                    Deposit
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/withdraw"
                  >
                    Withdraw
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/loans"
                  >
                    Loans
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/payments"
                  >
                    Payments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/transfer-money"
                  >
                    Transfer
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/trade-crypto"
                  >
                    Crypto
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/all-data"
                  >
                    AllData
                  </NavLink>
                </li>
                <li className="nav-item menuButton">
                  <NavLink
                    className={({ isActive }) =>
                    isActive ? "nav-link active text-white" : "nav-link hoverEffect"
                    }
                    to="/create-account"
                  >
                    Create Account
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
