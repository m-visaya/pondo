import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getCrowdFundDetails } from "../../contracts/utils";
import DiscoverCardSkeleton from "./discover_card_skeleton";

function DiscoverCard({ address }) {
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
      {console.log(crowdFundDetails)}
      {crowdFundDetails ? (
        <Link to={`/crowdfund/${address}`} state={crowdFundDetails}>
          <div className="">
            <a href="#!">
              <img
                className="rounded-[25px]"
                src={crowdFundDetails.image}
                alt="aaaaaa"
              />
            </a>
            <div className="mx-2 mt-3">
              <h5 className="text-pondo-blue text-start font-bold text-2xl mb-2">
                {crowdFundDetails.json.title}
              </h5>
              <p className="text-clip overflow-hidden text-start mb-3 max-h-12">
                {crowdFundDetails.json.description}
              </p>
              <p className="text-pondo-blue font-bold text-start text-xl mb-4">
                ETH {crowdFundDetails.bal} of ETH {crowdFundDetails.goalParsed}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <DiscoverCardSkeleton></DiscoverCardSkeleton>
      )}
    </>
  );
}

export default DiscoverCard;
