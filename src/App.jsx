import './App.css';
import Body from './components/Body';
import Layout from './layout/Layout';
import CreateAccount from './components/CreateAccount';
import React, { useState, useContext } from 'react';
import { AppContext } from './utils/Context';


function App() {
  const {users,
    currentUser,
    authenticated,
    balance,
    loginMessage,
    transactions,
  } = useContext(AppContext);

    console.log("Users", users);
    console.log("Current User", currentUser);
    console.log("Authenticated", authenticated);
    console.log("Balance", balance);
    console.log("Login Message", loginMessage);
    console.log("Transactions", transactions);

  return (
    <Layout>
      {authenticated && <Body />}
      {!authenticated && <CreateAccount />}
    </Layout>
    );

}

export default App;
