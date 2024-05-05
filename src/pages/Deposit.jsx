import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

export default function Deposit() {
  const [deposit, setDeposit] = useState("");
  const { handleDeposit, authenticated, validateNumber } =
    useContext(AppContext);

  function onDepositClick() {
    if (!validateNumber(deposit)) {
      alert("Please enter a valid number");
      return;
    }
    handleDeposit(deposit);
    setDeposit("");
    alert("Deposit successful!");
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
      <HorizontalBalanceCard />
      <div className="row flex-wrap align-items-center justify-content-center">
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <Card
            bgcolor="success"
            header="DEPOSIT"
            status=""
            text="Deposit money into your account"
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
                    value={deposit}
                    onChange={onDepositChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={onDepositClick}
                  disabled={deposit === ""}
                >
                  Deposit
                </button>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
