import { useState } from "react";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

import Nav from "./navbar";
import Foot from "./footer";
import CardsCrowdFunds from "./components/CardsCrowdFunds";
import Form from "./Form";

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
      <Form></Form>
      {crowdFunds.length > 0 ? (
        crowdFunds.map((item, index) => {
          return <CardsCrowdFunds address={item} />;
        })
      ) : (
        <b>No crowdfunds</b>
      )}

      <Foot />
    </div>
  );
}

export default App;
