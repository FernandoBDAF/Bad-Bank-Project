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
            text="Do your payments now"
            body={
              <>
                <div className="row">
                  <div className="col-md-12">
                    <h5>Daily Limit: $1000</h5>
                    <h5>Available limit: $0</h5>
                    <label htmlFor="loanAmount" className="form-label">
                        Change your limit
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="limitAmount"
                        placeholder="Enter your new limit"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                    <button className="btn btn-primary mb-3">
                      Confirm Change
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="loanAmount" className="form-label">
                      Payment Code
                    </label>
                    {/* input size should be 100% of the container */}
                    <input
                      type="number"
                      className="form-control"
                      id="loanAmount"
                      placeholder="Enter your 16-digits code"
                      value={""}
                      onChange={takeLoan}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="loanAmount" className="form-label">
                      Value
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
                      Bill Type
                    </label>
                    <select className="form-select" id="paymentTerm">
                        <option value="1">Electricity</option>
                        <option value="2">Water</option>
                        <option value="3">Internet</option>
                        <option value="4">Phone</option>
                        <option value="5">Credit Card</option>
                        <option value="6">Insurance</option>
                        <option value="7">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={takeLoan}
                >
                  Confirm Payment
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