import './App.css';
import React, { useContext, useEffect } from 'react';
import { AppContext } from './utils/Context';
import { Navigate } from 'react-router-dom';
import { check } from 'prettier';


function App() {
  const {users,
    currentUser,
    authenticated,
    balance,
    loginMessage,
    transactions,
    checkLogin,
  } = useContext(AppContext);

    console.log("Users", users);
    console.log("Current User", currentUser);
    console.log("Authenticated", authenticated);
    console.log("Balance", balance);
    console.log("Login Message", loginMessage);
    console.log("Transactions", transactions);

  if (!authenticated) {
    return checkLogin();
  }

  return <Navigate to="/home" />;
  

}

export default App;
