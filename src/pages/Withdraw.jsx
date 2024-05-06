import React, { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import HorizontalBalanceCard from "../components/HorizontalBalanceCard";

export default function Withdraw() {
  const [withdraw, setWithdraw] = React.useState("");
  const { handleWithdraw, authenticated, validateNumber } =
    useContext(AppContext);

  function onWithdrawClick() {
    if (withdraw === "" || withdraw <= 0) {
      alert("Please enter positive value");
      return;
    }
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

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return (
    <div className="container mt-5">
      <HorizontalBalanceCard />
      <div className="row flex-wrap align-items-center justify-content-center">
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
                    type="number"
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
                  disabled={withdraw === ""}
                >
                  Withdraw
                </button>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}
