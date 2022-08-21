import { Link, useNavigate } from "react-router-dom";

import PondoDefault from "../../assets/default_pondo.svg";
import { registerCrowdFund } from "../../contracts/utils";

export default function CreateSummary({ details, tag }) {
  const navigate = useNavigate();

  async function submit() {
    await registerCrowdFund(
      details.title,
      details.description,
      tag,
      details.name,
      details.goal,
      details.image
    );
    navigate("/");
  }
  return (
    <div className="flex">
      <div>
        <div className="xs:w-72 md:w-96">
          <img
            className="rounded-[25px] min-w-full"
            src={details.imageURL}
          ></img>
          <p className="text-pondo-blue text-start font-bold text-[18pt] my-3">
            {details.title}
          </p>
          <p className="text-pondo-blue text-start leading-3 font-bold text-[14pt] my-3">
            ETH {details.goal} Target
          </p>
          <div className="bg-pondo-light-de rounded-full w-24 py-1 my-5 text-[12px] text-center">
            {tag}
          </div>
          <div>
            <p className="text-start text-[14px] max-h-32 overflow-hidden">
              {details.description}
            </p>
          </div>
          <div className="flex mt-3">
            <button
              type="submit"
              className="rounded-full bg-pondo-blue text-pondo-light font-bold w-32 py-3 mt-6 mr-3"
              onClick={submit}
            >
              Confirm
            </button>
            <Link to={"/"}>
              <button
                type="submit"
                className="rounded-full bg-pondo-light-de font-bold w-32 py-3 mt-6"
              >
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
