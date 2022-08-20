import { useLocation } from "react-router-dom";
import { useState } from "react";

import Navigation from "../Shared/navbar";
import Footer from "../Shared/footer";
import PondoInfo from "./pondo_info";
import PondoOrganizer from "../Pondo/profile_avatar";
import PondoComments from "../Pondo/pondo_comments";
import PondoTargetGoal from "../Pondo/pondo_target_goal";

import { getFundMeContract, parseETH } from "../../contracts/utils";

export default function ProjectPondo() {
  const [balance, setBalance] = useState(null);
  const loc = useLocation();
  const details = loc.state;
  const contract = getFundMeContract(details.address);
  contract.on("Fund", async (donor, value, balance) => {
    const bal = parseETH(balance);
    setBalance(bal);
  });

  return (
    <div>
      <Navigation />
      <div className="px-32 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <PondoInfo
              image={details.image}
              title={details.json.title}
              description={details.json.description}
              category={details.tag}
            />
            <p className="text-[18pt] text-pondo-blue font-bold mt-16 mb-12">
              Pondo Organizer
            </p>
            <PondoOrganizer name={details.json.owner} />
            <p className="text-[18pt] text-pondo-blue font-bold mt-12 mb-12">
              Pon-donor Words
            </p>
            <PondoComments />
          </div>
          <div>
            <PondoTargetGoal info={details} balance={balance} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
