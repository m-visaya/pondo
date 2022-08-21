import YourPondos from "./components_your_pondos";

import { useFetchCrowdFunds } from "../../contracts/useFetchCrowdFunds";
import PondoCards from "./components_your_pondos";

export default function DashboardPondos() {
  const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds(null, true);

  return (
    <div className="flex">
      <div>
        <p className="font-bold text-[20pt] text-pondo-blue text-start">
          Your Pondos
        </p>
        <div className="grid grid-cols-3 gap-4 my-6">
          {crowdFunds?.map((value, index) => (
            <PondoCards address={value} key={`mcfCard-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
