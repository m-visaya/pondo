import { Link } from "react-router-dom";

import avatar from "../../Assets/default_avatar.svg";

export default function DashboardNav({ userAddr }) {
  return (
    <div className="flex text-center">
      <div className="bg-pondo-light rounded-[25px]">
        <div className="w-64 p-10">
          <img src={avatar} className="w-24 mx-auto"></img>
          <p
            className="font-bold text-[14pt] text-pondo-blue
           mt-3 "
          >
            Account Address
          </p>
          <p className="font-bold text-[13pt] text-pondo-blue-secondary mt-1 break-words">
            {userAddr}
          </p>
          <Link to={`/create`}>
            <div className="bg-pondo-blue text-pondo-light rounded-[25px] p-2 mb-2 mt-4">
              <button className="font-bold hover:text-pondo-light-de text-sm">
                Create a Pondo
              </button>
            </div>
          </Link>
          <div className="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-2 my-4">
            <button className="font-bold text-sm">Pondos</button>
          </div>
        </div>
      </div>
    </div>
  );
}
