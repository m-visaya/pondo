import { useState } from "react";

import CreatePondoS1 from "./create_pondo_s1";
import CreatePondoS2 from "./create_pondo_s2";
import CreatePondoSummary from "./create_pondo_summary";

function CreatePondoUI() {
  const [currView, setCurrView] = useState(0);
  const [tag, setTag] = useState();
  const [details, setDetails] = useState({});

  return (
    <div>
      {currView == 0 ? (
        <CreatePondoS1 setCurrView={setCurrView} setTag={setTag} />
      ) : currView == 1 ? (
        <CreatePondoS2 setCurrView={setCurrView} setDetails={setDetails} />
      ) : (
        <CreatePondoSummary details={details} tag={tag} />
      )}
    </div>
  );
}

export default CreatePondoUI;
