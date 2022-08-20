import { useState } from "react";
import { useFetchFund } from "./contracts/useFetchFund";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

import Nav from "./navbar"
import Foot from "./footer"
import CardsCrowdFunds from "./components/CardsCrowdFunds";

function App() {
  // const [totalFund, _] = useFetchFund();
  const [inputDonate, setInputDonate] = useState("");
  const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds();

  async function fund(e) {
    e.preventDefault();
    await transferToContract(inputDonate);
    setInputDonate("");
  }

  return (
    <div className="App">
      <Nav />

      {crowdFunds !== []
        ? crowdFunds.map((item, index) => {
            return <CardsCrowdFunds address={item} />;
          })
        : "No crowdfunds"}


      <Foot />
    </div>
  );
}

export default App;
