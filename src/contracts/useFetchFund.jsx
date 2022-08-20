import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { provider, fundMeABI } from "./constants";

function useFetchFund(address) {
  const [funds, setFunds] = useState(0);

  useEffect(() => {
    const contract = new ethers.Contract(address, fundMeABI, provider);

    const get = async () => {
      let balance = await provider.getBalance(address);

      balance = ethers.utils.formatEther(balance);
      setFunds(balance);
    };

    get();

    contract.on("Fund", async function (a, b) {
      get();
      console.log($`contract {address} received {b} from {a}`);
    });
  }, []);

  return [funds, setFunds];
}

export { useFetchFund };
