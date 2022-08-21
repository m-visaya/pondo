import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import Navigation from "../Shared/navbar";
import DonatePondoCard from "./donate_pondo_card";
import { transferToContract } from "../../contracts/utils";

export default function DonateUI() {
  const [amount, setAmount] = useState(1);

  const loc = useLocation();
  const details = loc.state;
  const navigate = useNavigate();

  async function donate(e) {
    e.preventDefault();
    if (!(amount > 0)) return;

    await transferToContract(details.address, amount.toString());

    navigate(`/crowdfund/${details.address}`, { state: details });
  }

  return (
    <div>
      <Navigation />
      <div className="flex justify-center min-h-1/2">
        <div className="px-1 py-16 max-w-screen-xl mx-auto">
          <DonatePondoCard details={details} />

          <p className="mt-10 mb-4 text-[20pt] text-pondo-blue font-bold">
            Smart Contract Address:
          </p>

          <div className="bg-pondo-light h-14 rounded-[25px] flex items-center px-5">
            {" "}
            {details.address}
          </div>

          <p className="mt-8 mb-4 text-[20pt] text-pondo-blue font-bold">
            Amount (ETH):
          </p>

          <form>
            <input
              className="py-2 bg-pondo-light rounded-full w-64 px-5"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Donation Amount"
            ></input>
          </form>

          <p className="mt-8 mb-4 text-[20pt] text-pondo-blue font-bold">
            Leave a message:
          </p>

          <form onSubmit={donate}>
            <input
              type="text"
              className="py-2 bg-pondo-light rounded-full w-64 px-5"
              placeholder="Anonymous"
            ></input>
            <div className="mt-3">
              <textarea
                className="bg-pondo-light rounded-[25px] w-full max-h-36 p-5 mt-3 "
                placeholder="Message"
              ></textarea>
            </div>
            <div>
              {amount > 0 ? (
                <button
                  type="submit"
                  className="rounded-2xl bg-pondo-blue py-3 text-pondo-light font-bold w-36 mt-4"
                >
                  Donate
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded-2xl bg-pondo-blue-secondary py-3 text-pondo-light font-bold w-36 mt-4"
                  disabled
                >
                  Donate
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
