import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Navigation from "../Shared/navbar";
import Footer from "../Shared/footer";
import PondoInfo from "./pondo_info";
import PondoOrganizer from "../Pondo/profile_avatar";
import PondoComments from "../Pondo/pondo_comments";
import PondoTargetGoal from "../Pondo/pondo_target_goal";
import PondoContract from "./pondo_contract_adr";
import PondoTotalPon from "./pondo_total_pon";

import {
  getFundMeContract,
  parseETH,
  getUserFunds,
} from "../../contracts/utils";

export default function ProjectPondo() {
  const [balance, setBalance] = useState(null);
  const [donated, setDonated] = useState(0);
  const loc = useLocation();
  const details = loc.state;
  const contract = getFundMeContract(details.address);
  contract.on("Fund", async (donor, value, balance) => {
    const bal = parseETH(balance);
    setBalance(bal);
  });

  useEffect(() => {
    const get = async () => {
      let res = await getUserFunds(details.owner, details.address);

      setDonated(res);
    };
    get();
  }, [balance]);

  return (
    <div>
      <Navigation />
      <div className="xs:px-4 md:px-32 xs:py-10 md:py-20 max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-3 xs:gap-0 md:gap-8 lg:gap-12">
          <div className="lg:col-span-2 xs:mb-12">
            <PondoInfo
              image={details.image}
              title={details.json.title}
              description={details.json.description}
              category={details.tag}
              donated={donated}
            />
            <p className="text-[18pt] text-pondo-blue font-bold mt-14 mb-8">
              Pondo Information
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <PondoOrganizer name={details.json.owner} />
              </div>
              <div>
                <PondoContract address={details.owner} />
              </div>
            </div>
            <p className="text-[18pt] text-pondo-blue font-bold mt-12 mb-8">
              Pon-donor Words
            </p>
            <div className="grid grid-cols-1 gap-y-6">
              <PondoComments />
              <PondoComments />
              <PondoComments />
              <PondoComments />
            </div>
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
