import { useState } from "react";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

function Form() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");

  return (
    <div>
      Details
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerCrowdFund(name, goal, image);
        }}
      >
        <input
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target Goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <input 
          type="file" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <br />
        <button type="submit">Register CrowdFund</button>
      </form>
    </div>
  );
}

export default Form;
