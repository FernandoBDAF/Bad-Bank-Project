import Card from "../components/Card";
import React, { useContext } from "react";
import { AppContext } from "../utils/Context";
import Layout from "../layout/Layout";
import { Link, Navigate } from "react-router-dom";

function Login() {
  const [submited, setSubmited] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const { logUser, loginMessage, authenticated } = useContext(AppContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleLogin() {
    console.log(email, password);
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    logUser({ email, password });
    setEmail("");
    setPassword("");
    setSubmited(true);
  }

  function handleTryAgain() {
    setSubmited(false);
  }

  if (authenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h5>Welcome to Bad Bank!</h5>
      <Card
        bgcolor="primary"
        header="Login"
        status={status}
        body={
          <>
            {submited ? (
              <>
                {authenticated ? (
                  <>
                    <h5>Welcome</h5>
                    <p>{loginMessage}</p>
                    <Link to="/" className="btn btn-light">
                      Go to your account
                    </Link>
                  </>
                ) : (
                  <>
                    <h5>Error</h5>
                    <p>{loginMessage}</p>
                    <button
                      type="submit"
                      className="btn btn-light"
                      onClick={handleTryAgain}
                    >
                      Try again
                    </button>
                  </>
                )}
              </>
            ) : (
              <>
                Email address
                <br />
                <input
                  type="input"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <br />
                Password
                <br />
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </>
            )}
            {!authenticated && (
              <>
                <hr style={{ height: "5px", backgroundColor: "white" }} />
                <p className="mt-3">Do not have an account?</p>
                <Link to="/create-account" className="btn btn-light">
                  Create your account
                </Link>
              </>
            )}
          </>
        }
      />
      <p>
        The Bad Bank app allow you to input all your transactions and keep track
        of your income and expenses. Create your account now so you can control
        your financial transactions
      </p>
    </>
  );
}

export default Login;
