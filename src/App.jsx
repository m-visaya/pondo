import { useState } from "react";
import { useFetchFund } from "./contracts/useFetchFund";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

import "./App.css";

import Form from "./Form";
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
      <Form></Form>

      {crowdFunds !== []
        ? crowdFunds.map((item, index) => {
            return <CardsCrowdFunds address={item} />;
          })
        : "No crowdfunds"}
      {/* <h1> Total Funds: {totalFund} </h1>
      <form onSubmit={fund}>
        <input
          onChange={(e) => setInputDonate(e.target.value)}
          value={inputDonate}
          placeholder="Enter amount"
        />
        {inputDonate == "" || parseFloat(inputDonate) <= 0 ? (
          <button type="submit" disabled>
            {" "}
            Fund{" "}
          </button>
        ) : (
          <button type="submit"> Fund </button>
        )}
      </form> */}
    </div>
  );
}

export default App;
