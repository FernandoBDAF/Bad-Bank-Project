import Card from "../components/Card";
import { useState, useContext } from "react";
import { AppContext } from "../utils/Context";
import FinancialOperations from "../components/OperationsCard";

export default function Loans() {
  const [amount, setAmount] = useState("");
  const { balance } = useContext(AppContext);
  function takeLoan() {
    alert("Loan of " + amount + " taken");
  }

  return (
    <div className="container mt-5">
      <div className="row flex-wrap align-items-center justify-content-between">
        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
          <h1 className="mb-3">{balance}</h1>
          <Card
            bgcolor="info"
            header="Loans"
            status=""
            text="Unblock your limit"
            body={
              <>
                <div className="row">
                  <div className="col-md-12">
                    <h5>Current limit: $1000</h5>
                    <h5>Available limit: $0</h5>
                    <button className="btn btn-primary mb-3">
                      Unlock Loans
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="loanAmount" className="form-label">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="loanAmount"
                      placeholder="Enter amount"
                      value={0}
                      onChange={takeLoan}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="paymentTerm" className="form-label">
                      Payment Term
                    </label>
                    <select className="form-select" id="paymentTerm">
                      <option value="1">1 month</option>
                      <option value="2">2 months</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Interest Rate</label>
                  <p>Variable rates apply</p>
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={takeLoan}
                >
                  Confirm Loan
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
