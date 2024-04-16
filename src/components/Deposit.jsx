import React from "react";
import Card from "./Card";

function Deposit({ handleDeposit }) {
  const [deposit, setDeposit] = React.useState(0);
  return (
    <>
      <h1>Deposit</h1>
      <Card
        bgcolor="success"
        header="Deposit"
        status=""
        body={
          <>
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="deposit"
              placeholder="Enter deposit amount"
              value={deposit}
              onChange={(e) => setDeposit(e.currentTarget.value)}
            />
            <br />
            <button type="submit" className="btn btn-light" onClick={() => handleDeposit(deposit)}>
              Deposit
            </button>
          </>
        }
      />
    </>
  );
}

export default Deposit;
