import Card from "../components/Card";
import React, { useContext } from "react";
import { AppContext } from "../utils/Context";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const { addUser } = useContext(AppContext);

  function createAccount() {
    let errorMsg = "";
    errorMsg += name !== "" ? "" : "You have to insert your name!\n";
    errorMsg += email !== "" ? "" : "You have to insert your email!\n";
    errorMsg +=
      password.length < 8
        ? "You password has to be at least 8 characters long!\n"
        : "";
    if (errorMsg !== "") {
      alert(errorMsg);
      return;
    }
    addUser({ name, email, password, balance: 0 });
    setShow(false);
  }

  function createAnotherAccount() {
    setShow(true);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-between">
      <h5>Welcome to Bad Bank!</h5>
      <Card
        bgcolor="primary"
        header="Create Account"
        status={""}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <br />
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
                onClick={createAccount}
                disabled={name === "" && email === "" && password === ""}
              >
                Create Account
              </button>
            </>
          ) : (
            <div className="d-flex flex-column gap-2">
              <h5>Success!!</h5>
              <p>Your account has been created successfully</p>
              <Link to="/log-in" className="btn btn-light">
                Go to login
              </Link>
              <button
                type="submit"
                className="btn btn-light"
                onClick={createAnotherAccount}
              >
                Create Another Account
              </button>
            </div>
          )
        }
      />
    </div>
  );
}
