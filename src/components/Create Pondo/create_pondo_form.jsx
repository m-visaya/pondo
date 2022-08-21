import { useState } from "react";

export default function CreatePondoForm({ setDetails, setCurrView }) {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [imageURL, setImageURL] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [goal, setGoal] = useState();

  function submitForm(e) {
    e.preventDefault();
    setDetails({
      image: image,
      imageURL: imageURL,
      title: title,
      description: description,
      goal: goal,
      name: name,
    });
    setCurrView(2);
  }

  return (
    <div className="flex">
      <div>
        <div className="xs:w-72 md:w-96">
          <form onSubmit={submitForm}>
            <p className=" text-[14pt] text-start mt-3">Pondo Image</p>
            <input
              type="file"
              accept="image/*"
              className="my-4"
              onChange={(e) => {
                const [file] = e.target.files;
                setImageURL(URL.createObjectURL(file));
                setImage(e.target.files[0]);
              }}
            ></input>
            <p className=" text-[14pt] text-start mt-2">Your Name</p>
            <input
              className=" rounded-xl bg-pondo-light py-3 px-4 my-3 w-full"
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <p className=" text-[14pt] text-start mt-2">Pondo Title</p>
            <input
              className=" rounded-xl bg-pondo-light py-3 px-4 my-3 w-full"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <p className=" text-[14pt] text-start mt-2">Target Goal</p>
            <input
              className=" rounded-xl bg-pondo-light py-3 px-4 my-3 w-full"
              type="number"
              onChange={(e) => setGoal(e.target.value)}
            ></input>
            <div className="mt-3">
              <p className=" text-[14pt] text-start mt-2">Pondo Details</p>
              <textarea
                className="bg-pondo-light rounded-xl w-full max-h-36 p-5 mt-3 "
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="flex mt-3">
              <button
                type="submit"
                className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 mt-6"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
