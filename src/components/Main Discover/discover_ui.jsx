import { useState, useEffect } from "react";

import Navbar from "../Shared/navbar";
import Footer from "../Shared/footer";
import DiscoverCategories from "../Main Discover/discover_categories";
import Discover from "../Main Discover/discover";

import { useFetchCrowdFunds } from "../../contracts/useFetchCrowdFunds";

export default function DiscoverMain() {
  const [tag, setTag] = useState();
  const [crowdFunds, setCrowdFunds] = useFetchCrowdFunds(tag);

  return (
    <div>
      <Navbar />
      <div className="md:px-8 md:py-5 max-w-screen-xl mx-auto">
        <p className="xs:text-[22pt] md:text-[28pt] font-bold xs:px-3 xs:mt-3 xs:mb-10 mb-7 text-pondo-blue">
          Discover Pondos
        </p>
        <div className="grid xs:grid-cols-1 lg:grid-cols-3  lg:gap-x-16 lg:mb-32">
          <div className="xs:px-3 col-span-2">
            <Discover crowdFunds={crowdFunds} />
          </div>
          <div className="col-span-1">
            <DiscoverCategories tag={tag} setTag={setTag} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
