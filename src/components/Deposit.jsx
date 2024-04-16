import React, {useContext} from "react";
import Card from "./Card";
import Layout from "../layout/Layout";
import {AppContext} from "../utils/Context";

function Deposit() {
  const [deposit, setDeposit] = React.useState(0);
  const {handleDeposit} = useContext(AppContext);

  return (
    <Layout>
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
    </Layout>
  );
}

export default Deposit;
