import React, { useState, createContext, useContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
    const [id, setId] = useState(1);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);
  const [balance, setBalance] = useState(0);
  const [loginMessage, setLoginMessage] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
    setTransactions([
      ...transactions,
      { type: "Deposit", amount: amount, id: transactions.length + 1, timestamp: new Date()},
    ]);
  };

  const handleWithdraw = (amount) => {
    setBalance(balance - amount);
    setTransactions([
      ...transactions,
      { type: "Withdraw", amount: amount, id: transactions.length + 1, timestamp: new Date()},
    ]);
  };

  const changeAuth = () => {
    setAuthenticated(!authenticated);
  };

  const addUser = (user) => {
    setUsers(() => [...users, { ...user, id: id }]);
    setId(id + 1);
  };

  const logUser = (user) => {
    if (
      users.length > 0 &&
      users.find(
        (u) => u.email === user.email && u.password === user.password
      ) !== undefined
    ) {
      setCurrentUser(user);
      setAuthenticated(true);
      setLoginMessage("You have successfully logged in!");
    } else {
      setLoginMessage("Invalid email or password. Please try again.");
    }
  };

  const value = {
    users,
    currentUser,
    authenticated,
    balance,
    transactions,
    handleDeposit,
    handleWithdraw,
    changeAuth,
    addUser,
    logUser,
    loginMessage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
