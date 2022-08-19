import { useState, useEffect } from "react";
import { fetchCrowdFunds } from "./utils";
import { fundFactoryContract } from "./constants";

function useFetchCrowdFunds() {
  const [crowdFunds, setCrowdFunds] = useState([]);

  useEffect(() => {
    const get = async () => {
      let data = await fetchCrowdFunds();
      setCrowdFunds(data);
    };

    get();

    fundFactoryContract.on("CrowdFundPublished", async function (e) {
      await get();
    });
  }, []);

  return [crowdFunds, setCrowdFunds];
}

export { useFetchCrowdFunds };
