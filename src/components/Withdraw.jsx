import React, {useContext} from "react";
import Card from "./Card";
import Layout from "../layout/Layout";
import {AppContext} from "../utils/Context";

function Withdraw() {
  const [withdraw, setWithdraw] = React.useState(0);
  const {handleWithdraw} = useContext(AppContext);

  return (
    <Layout>
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
    </Layout>
  );
}

export default Withdraw;
