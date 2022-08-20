import { useState } from "react";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";
import CardsCrowdFunds from "./components/CardsCrowdFunds";
import Form from "./Form";

import DonateUI from "./components/Donate/donate_ui";
import DiscoverUI from "./components/Main Discover/discover_ui";

function App() {
  // const [totalFund, _] = useFetchFund();
  // const [inputDonate, setInputDonate] = useState("");
  // const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds();

  // async function fund(e) {
  //   e.preventDefault();
  //   await transferToContract(inputDonate);
  //   setInputDonate("");
  // }

  return (
    <div className="App">
      <Form></Form>

      <DiscoverMain />
      {/* <Form></Form> */}
      {/* {crowdFunds.length > 0 ? (
        crowdFunds.map((item, index) => {
          return <CardsCrowdFunds address={item} />;
        })
      ) : (
        <b>No crowdfunds</b>
      )} */}
    </div>
  );
}

export default App;
