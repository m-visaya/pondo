export default function CreatePondoCategories({ setTag, setCurrView }) {
  return (
    <div className="flex">
      <div>
        <div>
          <div className="grid-cols-3">
            <div>
              <button
                type="button"
                onClick={() => {
                  setTag("Animals");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Animals
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Business");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Business
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Community");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Community
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setTag("Creative");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Creative
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Education");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Education
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Emergency");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Emergency
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setTag("Environment");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Environment
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Events");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Events
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Family");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Family
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setTag("Funeral");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Funeral
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Medical");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Medical
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Sports");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Sports
              </button>
            </div>
            <div>
              <button
                type="button"
                onClick={() => {
                  setTag("Volunteer");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Volunteer
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Wishes");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Wishes
              </button>
              <button
                type="button"
                onClick={() => {
                  setTag("Others");
                  setCurrView(1);
                }}
                className="bg-pondo-light hover:bg-pondo-light-de rounded-full w-36 py-2 mx-4 my-2"
              >
                Others
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
