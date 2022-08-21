import DiscoverCard from "./discover_card";

export default function DiscoverCards({ crowdFunds }) {
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xs:gap-4 md:gap-7 w-full">
      {crowdFunds?.map((value, index) => (
        <DiscoverCard
          crowdFunds={crowdFunds}
          address={value}
          key={`cfCard-${index}`}
        />
      ))}
    </div>
  );
}
