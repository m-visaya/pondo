import { useState, useEffect } from "react";
import { getSigner } from "../../contracts/utils";

import Navbar from "../Shared/navbar";
import Footer from "../Shared/footer";
import DashboardLeftNav from "../Dashboard/dashboard_left_pane";
import DashboardPondos from "./dashboard_your_pondos";

export default function Dashboard() {
  const [userAddr, setUserAddr] = useState();

  useEffect(() => {
    const get = async () => {
      let signer = await getSigner().getAddress();
      setUserAddr(signer);
    };
    get();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-32 py-5 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="col-span-1">
            <DashboardLeftNav userAddr={userAddr} />
          </div>
          <div className="col-span-2">
            <DashboardPondos />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
