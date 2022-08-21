import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { getCrowdFundDetails } from "../../contracts/utils";
import DiscoverCardSkeleton from "./discover_card_skeleton";

function DiscoverCard({ address, crowdFunds }) {
  const [crowdFundDetails, setCrowdFundDetails] = useState();

  useEffect(() => {
    const get = async () => {
      const res = await getCrowdFundDetails(address);
      setCrowdFundDetails(res);
    };

    get();
  }, [crowdFunds]);

  return (
    <>
      {crowdFundDetails ? (
        <Link to={`/crowdfund/${address}`} state={crowdFundDetails}>
          <div className="">
            <a href="#!">
              <img
                className="xs:rounded-[15px] md:rounded-[25px]"
                src={crowdFundDetails.image}
                alt=""
              />
            </a>
            <div className="mx-2 mt-3">
              <h5 className="text-pondo-blue text-start font-bold xs:leading-5 xs:text-[12pt] md:text-2xl mb-1">
                {crowdFundDetails.json.title}
              </h5>
              <p className="text-clip overflow-hidden text-start mb-1 xs:text-[10pt] md:text-[12pt] xs:max-h-10 md:max-h-12">
                {crowdFundDetails.json.description}
              </p>
              <p className="text-pondo-blue font-bold text-start xs:text-[11pt] md:text-[14pt] mb-4">
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
