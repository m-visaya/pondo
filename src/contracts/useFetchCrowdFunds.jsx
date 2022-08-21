import { useState, useEffect } from "react";
import { fetchCrowdFunds } from "./utils";
import { fundFactoryContract } from "./constants";

function useFetchCrowdFunds(tag, owner) {
  const [crowdFunds, setCrowdFunds] = useState();

  useEffect(() => {
    const get = async () => {
      let data = await fetchCrowdFunds(tag, owner);
      setCrowdFunds(data);
    };

    get();

    fundFactoryContract.on(
      "CrowdFundPublished",
      async function (owner, contractAddress) {
        console.log("CrowdFundPublished");
        get();
      }
    );
  }, [tag]);

  return [crowdFunds, setCrowdFunds];
}

export { useFetchCrowdFunds };
