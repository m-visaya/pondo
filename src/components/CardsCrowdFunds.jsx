import { useEffect, useState } from "react";
import { getCrowdFundDetails } from "../contracts/utils";

function CardsCrowdFunds({ address }) {
  const [title, setTitle] = useState("");
  const [goal, setGoal] = useState(0);
  const [owner, setOwner] = useState("");

  useEffect(() => {
    const init = async () => {
      const data = await getCrowdFundDetails(address);
      setTitle(data.metadataURI);
      setGoal(parseInt(data.goal));
      setOwner(data.owner);
    };

    init();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <h4>{owner}</h4>
      <h4>{address}</h4>
      <h4>{goal}</h4>
    </div>
  );
}

export default CardsCrowdFunds;
