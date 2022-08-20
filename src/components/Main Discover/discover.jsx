import DiscoverCard from "./discover_card";

export default function DiscoverCards() {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-3/4">
      {[...Array(10).keys()].map(() => (
        <DiscoverCard />
      ))}
    </div>
  );
}
