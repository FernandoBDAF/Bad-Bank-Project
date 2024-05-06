import Card from "../components/Card";
import React, { useContext } from "react";
import { AppContext } from "../utils/Context";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
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
    <div className="d-flex flex-column align-items-center justify-content-between">
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
                <p className="mt-3">Do not have an account yet?</p>
                <Link to="/create-account" className="btn btn-light">
                  Create your account
                </Link>
              </>
            )}
          </>
        }
      />
    </div>
  );
}
