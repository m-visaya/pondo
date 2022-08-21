import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { isOwner, withdraw } from "../../contracts/utils";

export default function PondoGoal({ info, balance }) {
  if (balance) info.bal = balance;

  const [withdrawable, setWithdrawable] = useState(false);

  useEffect(() => {
    const get = async () => setWithdrawable(await isOwner(info.owner));
    get();
  }, []);

  return (
    <div>
      <div className="flex h-full">
        <div className="bg-pondo-light text-center md:rounded-[25px] p-6 xs:w-full md:w-64 lg:w-72">
          <div className="p-5">
            <div className="text-start">
              <p className="text-pondo-blue font-bold text-[24pt]">
                ETH {info.bal}
              </p>
              <p className="text-pondo-blue font-bold text-[16pt] leading-5">
                raised of
              </p>
              <p className="text-pondo-blue font-bold text-[18pt]">
                ETH {info.goalParsed} goal
              </p>
            </div>
            {withdrawable ? (
              <div className="bg-pondo-blue  text-pondo-light rounded-[25px] p-3 mb-3 mt-6">
                <button
                  className="font-bold hover:text-pondo-blue-secondary"
                  onClick={() => withdraw(info.address)}
                >
                  Withdraw Funds
                </button>
              </div>
            ) : (
              <Link to={`/donate/${info.address}`} state={info}>
                <div className="bg-pondo-blue  text-pondo-light rounded-[25px] p-3 mb-3 mt-6">
                  <button className="font-bold hover:text-pondo-blue-secondary">
                    Donate
                  </button>
                </div>
              </Link>
            )}

            <div className="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-3 mb-3">
              <button className="font-bold">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
