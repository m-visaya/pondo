import DiscoverCard from "./discover_card";

export default function DiscoverCards() {
  return (
    <div className="grid grid-cols-2 gap-7 w-full">
      {[...Array(10).keys()].map(() => (
        <DiscoverCard />
      ))}
    </div>
  );
}
