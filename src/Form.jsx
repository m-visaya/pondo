import { useState } from "react";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

function Form() {
  const [metadataURI, setMetaDataURI] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <div>
      Details
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerCrowdFund(metadataURI, goal);
        }}
      >
        <input
          placeholder="metadataURI"
          value={metadataURI}
          onChange={(e) => setMetaDataURI(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input type="file" accept="image/*"></input>
        <br />
        <br />
        <button type="submit">Register CrowdFund</button>
      </form>
    </div>
  );
}

export default Form;
