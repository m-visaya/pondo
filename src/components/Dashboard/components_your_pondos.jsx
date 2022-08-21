import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getCrowdFundDetails } from "../../contracts/utils";
import DashCardSkeleton from "./dashboard_card_skeleton";

export default function PondoCards({ address }) {
  const [crowdFundDetails, setCrowdFundDetails] = useState();

  useEffect(() => {
    const get = async () => {
      const res = await getCrowdFundDetails(address);
      setCrowdFundDetails(res);
    };

    get();
  }, []);

  return (
    <>
      {crowdFundDetails && crowdFundDetails?.isActive ? (
        <Link to={`/crowdfund/${address}`} state={crowdFundDetails}>
          <div>
            <div className="flex">
              <div className="max-w-xs">
                <a href="#!">
                  <img
                    className="rounded-[20px] w-64"
                    src={crowdFundDetails?.image}
                    alt=""
                  />
                </a>
                <div className="mx-2 mt-3">
                  <h5 className="text-pondo-blue text-start leading-6 font-bold text-[16pt] mb-2">
                    {crowdFundDetails?.json.title}
                  </h5>
                  <p className="text-pondo-blue text-start text-[12pt] mb-4">
                    ETH {crowdFundDetails?.bal}of ETH{" "}
                    {crowdFundDetails?.goalParsed}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <DashCardSkeleton />
      )}
    </>
  );
}
