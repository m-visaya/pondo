import { Link } from "react-router-dom";

import CreatePondoCategories from "./create_pondo_categories";

export default function CreatePondoS1({ setTag, setCurrView }) {
  return (
    <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
      <div className="col-span-1">
        <div className="min-h-screen min-w-screen bg-pondo-blue">
          <div className="flex justify-center mx-auto">
            <p className="text-[28pt] pt-36 mx-16 text-white">
              Here begins your Pondo Journey
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="flex justify-center mx-auto">
          <div className="pt-36 mx-16">
            <p className="text-[22pt] mb-12">
              What best describe your fundraising goal?
            </p>
            <CreatePondoCategories setCurrView={setCurrView} setTag={setTag} />
            <Link to="/">
              <div className="mt-24">
                <button
                  type="button"
                  className="rounded-full bg-pondo-light hover:bg-pondo-light-de font-bold w-36 py-3 mt-6"
                >
                  Return
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
