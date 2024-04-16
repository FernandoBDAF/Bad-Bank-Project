import React from "react";
import Card from "./Card";

function Withdraw({ handleWithdraw }) {
  const [withdraw, setWithdraw] = React.useState(0);
  return (
    <>
      <h1>Withdraw</h1>
      <Card
        bgcolor="danger"
        header="Withdraw"
        status=""
        body={
          <>
            Amount
            <br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Enter withdraw amount"
              value={withdraw}
              onChange={(e) => setWithdraw(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={() => handleWithdraw(withdraw)}
            >
              Withdraw
            </button>
          </>
        }
      />
    </>
  );
}

export default Withdraw;
