import DiscoverCard from "./discover_card";
import { useFetchCrowdFunds } from "../../contracts/useFetchCrowdFunds";

export default function DiscoverCards() {
  const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds();

  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xs:gap-4 md:gap-7 w-full">
      {crowdFunds?.map((value) => (
        <DiscoverCard address={value} />
      ))}
    </div>
  );
}
