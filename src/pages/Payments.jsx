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
            header="PAY BILLS"
            body={
              <>
                <div className="d-flex flex-column gap-4">
                  <div className="col-md-12 d-flex">
                    <div className="d-flex flex-column gap-4">
                        <div>
                            <h6>Daily Limit: $1000</h6>
                            <h6>Available limit: $0</h6>
                        </div>
                            
                        <div>
                            <label htmlFor="loanAmount" className="form-label">
                                Change your payment limit
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="limitAmount"
                                placeholder="New value"
                                value={amount}
                                onChange={e => setAmount(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="align-self-end">
                        <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={takeLoan}
                        >
                            Confirm
                        </button>
                    </div>
                  </div>
                </div>

                  {/* <div className="col-md-6 mb-3">
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
                  </div> */}
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