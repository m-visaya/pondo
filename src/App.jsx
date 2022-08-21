import { useState, useEffect } from "react";
import { useFetchCrowdFunds } from "./contracts/useFetchCrowdFunds";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

import DiscoverUI from "./components/Main Discover/discover_ui";



function App() {
  return (
    <div className="App">
      <DiscoverUI />
    </div>
  );
}

export default App;
