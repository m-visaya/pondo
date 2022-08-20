import { useState, useEffect } from "react";
import { fetchCrowdFunds } from "./utils";
import { fundFactoryContract } from "./constants";

function useFetchCrowdFunds() {
  const [crowdFunds, setCrowdFunds] = useState();

  useEffect(() => {
    const get = async () => {
      let data = await fetchCrowdFunds();
      console.log(data);
      setCrowdFunds(data);
    };

    get();

    fundFactoryContract.on(
      "CrowdFundPublished",
      async function (owner, contractAddress) {
        console.log(owner);
        console.log(contractAddress);
        get();
      }
    );
  }, []);

  return [crowdFunds, setCrowdFunds];
}

export { useFetchCrowdFunds };
