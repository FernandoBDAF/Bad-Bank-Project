import React, { useState, useContext } from 'react';
import { AppContext } from '../utils/Context';

function FinancialOperations() {
  const {balance} = useContext(AppContext);
  const [loanAmount, setLoanAmount] = useState('');
  const [showLoanInput, setShowLoanInput] = useState(false);
  const [billAmount, setBillAmount] = useState('');
  const [billName, setBillName] = useState('');
  const [billType, setBillType] = useState('Electricity');
  const [showBillInput, setShowBillInput] = useState(false);
  const [transferAmount, setTransferAmount] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [showTransferInput, setShowTransferInput] = useState(false);
  const [investAmount, setInvestAmount] = useState('');
  const [showInvestInput, setShowInvestInput] = useState(false);
  const [showCryptoInput, setShowCryptoInput] = useState(false);

  const toggleInput = (setter) => () => {
    setter(prev => !prev);
  };

  const handleLoanApply = () => {
    if (loanAmount && !isNaN(loanAmount)) {
    //   setBalance(prevBalance => prevBalance + parseFloat(loanAmount));
      setLoanAmount('');
      setShowLoanInput(false);
    }
  };

  const handleBillPay = () => {
    if (billAmount && !isNaN(billAmount)) {
    //   setBalance(prevBalance => prevBalance - parseFloat(billAmount));
      setBillAmount('');
      setBillName('');
      setShowBillInput(false);
    }
  };

  const handleTransfer = () => {
    if (transferAmount && !isNaN(transferAmount)) {
    //   setBalance(prevBalance => prevBalance - parseFloat(transferAmount));
      setTransferAmount('');
      setRecipientEmail('');
      setShowTransferInput(false);
    }
  };

  const handleInvestment = () => {
    if (investAmount && !isNaN(investAmount)) {
    //   setBalance(prevBalance => prevBalance - parseFloat(investAmount));
      setInvestAmount('');
      setShowInvestInput(false);
    }
  };

  return (
    <div className="container my-3">
      <h3>BALANCE: ${balance.toFixed(2)}</h3>
      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-primary" onClick={toggleInput(setShowLoanInput)}>Get a Loan</button>
        {showLoanInput && (
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter loan amount"
              value={loanAmount}
              onChange={e => setLoanAmount(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleLoanApply}>Confirm</button>
          </div>
        )}

        <button className="btn btn-secondary" onClick={toggleInput(setShowBillInput)}>Pay a Bill</button>
        {showBillInput && (
          <>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the value of the payment"
              value={billAmount}
              onChange={e => setBillAmount(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of the bill"
              value={billName}
              onChange={e => setBillName(e.target.value)}
            />
            <select
              className="form-select"
              value={billType}
              onChange={e => setBillType(e.target.value)}
            >
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Internet">Internet</option>
              <option value="Phone">Phone</option>
              <option value="Rent">Rent</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Car">Car</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other</option>
            </select>
            <button className="btn btn-success" onClick={handleBillPay}>Pay</button>
          </>
        )}

        <button className="btn btn-secondary" onClick={toggleInput(setShowTransferInput)}>Transfer Money</button>
        {showTransferInput && (
          <>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the amount you want to transfer"
              value={transferAmount}
              onChange={e => setTransferAmount(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter the email of the recipient"
              value={recipientEmail}
              onChange={e => setRecipientEmail(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleTransfer}>Transfer</button>
          </>
        )}

        <button className="btn btn-secondary" onClick={toggleInput(setShowInvestInput)}>Invest Now</button>
        {showInvestInput && (
          <>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the amount you want to invest"
              value={investAmount}
              onChange={e => setInvestAmount(e.target.value)}
            />
            <button className="btn btn-success" onClick={handleInvestment}>Invest</button>
          </>
        )}
        <button className="btn btn-secondary" onClick={toggleInput(setShowBillInput)}>Trade Crypto</button>
        {showBillInput && (
          <>
            <input
              type="number"
              className="form-control"
              placeholder="Enter the value of the payment"
              value={billAmount}
              onChange={e => setBillAmount(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter the name of the bill"
              value={billName}
              onChange={e => setBillName(e.target.value)}
            />
            <select
              className="form-select"
              value={billType}
              onChange={e => setBillType(e.target.value)}
            >
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Internet">Internet</option>
              <option value="Phone">Phone</option>
              <option value="Rent">Rent</option>
              <option value="Mortgage">Mortgage</option>
              <option value="Car">Car</option>
              <option value="Insurance">Insurance</option>
              <option value="Other">Other</option>
            </select>
            <button className="btn btn-success" onClick={handleBillPay}>Pay</button>
          </>
        )}
      </div>
    </div>
  );
}

export default FinancialOperations;
