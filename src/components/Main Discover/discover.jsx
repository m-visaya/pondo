import DiscoverCard from "./discover_card";

export default function DiscoverCards() {
  return (
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xs:gap-4 md:gap-7 w-full">
      {[...Array(10).keys()].map(() => (
        <DiscoverCard />
      ))}
    </div>
  );
}
