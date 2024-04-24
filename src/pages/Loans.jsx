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
          <Card
            bgcolor="info"
            header="LOANS"
            body={
              <>
                <div className="row mb-3">
                  <div className="col-md-12 d-flex gap-3">
                    <div>
                        <h6>Locked limit: $1000</h6>
                        <h6>Available limit: $0</h6>
                    </div>
                    <div className="align-self-end">
                        <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={takeLoan}
                        >
                            Unlock
                        </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                    <div className="d-flex gap-2">
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
                  
                  
                </div>


                <div className="d-flex gap-4">
                    <div className="mb-3">
                        <h6>Interest rate</h6>
                        <p>2% by month</p>
                    </div>
                    
                    <div className="align-self-start">
                        <button
                        type="submit"
                        className="btn btn-success"
                        onClick={takeLoan}
                        >
                        Confirm Loan
                        </button>
                    </div>
                    
                </div>
                
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
