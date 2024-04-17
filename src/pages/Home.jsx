import Card from "../components/Card";
import { useContext } from "react";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

function Home() {
  const { authenticated } = useContext(AppContext);

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return (
      <Card
        bgcolor="info"
        txtcolor="white"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text="You can move around using the navigation bar."
        body={
          <img src="./bank.png" className="img-fluid" alt="Responsive image" />
        }
      />
  );
}

export default Home;
