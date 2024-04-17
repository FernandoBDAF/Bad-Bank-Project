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
            <h1 className="mb-3">Withdraw</h1>
            <Card
              bgcolor="danger"
              header="Withdraw"
              status=""
              body={
                <>
                  <label htmlFor="withdraw" className="form-label">
                    Amount
                  </label>
                  <input
                    type="input"
                    className="form-control"
                    id="withdraw"
                    placeholder="Enter withdraw amount"
                    value={withdraw}
                    onChange={onWithdrawChange}
                  />
                  <br />
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
            <FinancialOperations initialBalance={balance} />
          </div>
        </div>
      </div>
  );
}