import { useState } from "react";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

import Nav from "./components/Shared/navbar";
import Foot from "./components/Shared/footer";
import CardsCrowdFunds from "./components/CardsCrowdFunds";
import Form from "./Form";
import DiscoverCards from "./components/Main Discover/discover";
import DiscoverCategories from "./components/Main Discover/discover_categories";

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
      <Nav />

      <div className="flex mx-96 my-10 gap-10">
        <DiscoverCards />
        <DiscoverCategories />
      </div>
      {/* <Form></Form> */}
      {/* {crowdFunds.length > 0 ? (
        crowdFunds.map((item, index) => {
          return <CardsCrowdFunds address={item} />;
        })
      ) : (
        <b>No crowdfunds</b>
      )} */}

      <Foot />
    </div>
  );
}

export default App;
