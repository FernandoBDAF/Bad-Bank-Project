import Card from "../components/Card";
import { useContext } from "react";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { authenticated } = useContext(AppContext);

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return (
    <div
      className="d-flex align-items-center justify-content-center bg-primary "
      style={{ height: "50vh" }}
    >
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <img src="./bank.png" className="w-50" alt="Responsive image" />
      </div>
      <div
        className="d-flex flex-column align-items-start mt-4 pt-5"
        style={{ "max-width": "400px" }}
      >
        <h1 className="text-light mb-3">BadBank</h1>
        <h5 className="text-light mb-3">Welcome to the bank</h5>
        <p className="text-white-50 mb-2">
          You can Deposit or Withdraw usd dollars, make payments our online
          money transfer or even pay your bills or trade crypto.
        </p>
        <p className="text-white-50">
          If you need help you can get a loan with us.
        </p>
      </div>
    </div>
  );
}
