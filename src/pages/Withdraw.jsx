import React, { useContext } from "react";
import Card from "../components/Card";
import Layout from "../layout/Layout";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import FinancialOperations from "../components/OperationsCard";

export default function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const { handleWithdraw, authenticated, balance, validateNumber } = useContext(AppContext);

  function onWithdrawClick() {
    handleWithdraw(withdraw);
    setWithdraw("");
    alert("Withdrawal successful!");
  }

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  function onWithdrawChange(e) {
    if (!validateNumber(e.target.value)) {
      alert("Please enter a valid number");
      return;
    }
    setWithdraw(e.target.value);
  }

  return (
    <div className="container mt-5">
      <div className="row flex-wrap align-items-center justify-content-between">
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Card
            bgcolor="danger"
            header="WITHDRAW"
            status=""
            text="Withdraw money from your account"
            body={
              <>
                <div className="mb-3">
                  <label htmlFor="deposit" className="form-label">
                    Amount
                  </label>

                  <input
                    type="input"
                    className="form-control"
                    id="deposit"
                    placeholder="Enter deposit amount"
                    value={withdraw}
                    onChange={onWithdrawChange}
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={onWithdrawClick}
                >
                  Withdraw
                </button>
              </>
            }
          />
        </div>
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <FinancialOperations />
        </div>
      </div>
    </div>
  );
}