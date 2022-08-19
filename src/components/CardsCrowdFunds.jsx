import { useEffect, useState } from "react";
import { getCrowdFundDetails, transferToContract } from "../contracts/utils";

function CardsCrowdFunds({ address }) {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState(0);
  const [owner, setOwner] = useState("");
  const [bal, setBal] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const init = async () => {
      const data = await getCrowdFundDetails(address);
      setTitle(data.metadataURI);
      setGoal(parseInt(data.goal));
      setOwner(data.owner);
      setBal(data.bal);
    };

    init();
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        transferToContract(address, amount);
      }}    
    >
      <h2>Metadata: {title}</h2>
      <h4>Owner: {owner}</h4>
      <h4>Contract: {address}</h4>
      <h4>Goal: {goal}</h4>
      <h4>Balance: {bal}</h4>
      <input
          type="number"
          placeholder="Ethereum amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      <button type="submit">Send</button>
      <br />
    </form>
  );
}

export default CardsCrowdFunds;
