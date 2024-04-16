import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Home from './Home';
import Withdraw from './Withdraw';
import React from 'react';

function Body (props) {
  const [balance, setBalance] = React.useState(0);

  const handleDeposit = (amount) => {
    setBalance(balance + amount);
  }

  const handleWithdraw = (amount) => {
    setBalance(balance - amount);
  }

  return (
    <div>
      <h1>{props.text}</h1>
      <h3>Balance: {balance}</h3>
      <Home />
      <CreateAccount />
      <Deposit handleDeposit={handleDeposit} />
      <Withdraw handleWithdraw={handleWithdraw} />
    </div>
  );
}

export default Body;