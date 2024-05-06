import { useContext } from "react";
import { AppContext } from "../utils/Context";
import { Navigate } from "react-router-dom";
import HomeCard from "../components/HomeCard";

export default function Home() {
  const { authenticated } = useContext(AppContext);

  if (!authenticated) {
    return <Navigate to="/log-in" />;
  }

  return <HomeCard 
      title={"BadBank"} 
      subtitle={"Welcome to the bank"} 
      text={"You can Deposit or Withdraw usd dollars, make payments our online money transfer or even pay your bills or trade crypto"} 
      subtext={"If you need help you can get a loan with us."}
    />;
}
