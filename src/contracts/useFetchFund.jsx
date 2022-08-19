import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { provider, fundMeContract } from "./constants";

function useFetchFund() {
  const [funds, setFunds] = useState(0);

  useEffect(() => {
    const get = async () => {
      let balance = await provider.getBalance(address);
      balance = ethers.utils.formatEther(balance);
      setFunds(balance);
    };

    get();

    fundMeContract.on("Fund", async function (e) {
      await get();
    });
  }, []);

  return [funds, setFunds];
}

export { useFetchFund };
