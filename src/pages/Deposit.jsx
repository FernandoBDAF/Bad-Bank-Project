import React, { useContext, useEffect } from "react";
import Card from "../components/Card";
import Layout from "../layout/Layout";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import FinancialOperations from "../components/OperationsCard";

export default function Deposit() {
  const [deposit, setDeposit] = React.useState("");
  const { handleDeposit, authenticated, balance, validateNumber } =
    useContext(AppContext);

  function onDepositClick() {
    handleDeposit(deposit);
    setDeposit("");
  }

  function onDepositChange(e) {
    if (!validateNumber(e.target.value)) {
      alert("Please enter a valid number");
      return;
    }
    setDeposit(e.target.value);
  }

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return (
      <div className="container mt-5">
        <div className="row flex-wrap align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="mb-3">Deposit</h1>
            <Card
              bgcolor="success"
              header="Deposit"
              status=""
              body={
                <form>
                  <div className="mb-3">
                    <label htmlFor="deposit" className="form-label">Amount</label>
                    <input
                      type="input"
                      className="form-control"
                      id="deposit"
                      placeholder="Enter deposit amount"
                      value={deposit}
                      onChange={onDepositChange}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-light"
                    onClick={onDepositClick}
                  >
                    Deposit
                  </button>
                </form>
              }
            />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <FinancialOperations initialBalance={balance} />
          </div>
        </div>
      </div>
  );
}