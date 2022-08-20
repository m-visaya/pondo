import DiscoverCard from "./discover_card";
import { useFetchCrowdFunds } from "../../contracts/useFetchCrowdFunds";

export default function DiscoverCards() {
  const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds();

  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-3/4">
      {crowdFunds.map((value) => (
        <DiscoverCard address={value} />
      ))}
    </div>
  );
}
