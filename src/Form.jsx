import { useState } from "react";
import { transferToContract, registerCrowdFund } from "./contracts/utils";

function Form() {
  const [owner, setOwner] = useState("");
  const [goal, setGoal] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      Details
      <form
        onSubmit={(e) => {
          e.preventDefault();
          registerCrowdFund(title, description, tag, owner, goal, image);
        }}
      >
        <input
          placeholder="Owner"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
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
