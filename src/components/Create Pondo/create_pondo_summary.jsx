import CreateSummary from "./create_summary";

export default function CreatePondoSummary({ details, tag }) {
  return (
    <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
      <div className="col-span-1">
        <div className="min-h-screen min-w-screen bg-pondo-blue">
          <div className="flex justify-center mx-auto">
            <p className="text-[28pt] pt-36 mx-16 text-white">
              Does this look all right?
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-center mx-auto">
          <div className="pt-36 mx-16">
            <CreateSummary details={details} tag={tag} />
          </div>
        </div>
      </div>
    </div>
  );
}
