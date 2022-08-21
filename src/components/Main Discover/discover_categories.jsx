export default function DiscoverCategories({ tag, setTag }) {
  function checkTag(curr) {
    if (tag != curr) {
      setTag(curr);
    } else {
      setTag(null);
    }
  }

  return (
    <div>
      <div className="flex">
        <div className="bg-pondo-light md:rounded-[25px] p-6 xs:w-full">
          <h1 className="text-[32px] leading-10 text-pondo-blue text-pon font-bold text-start">
            Pondo <br />
            Categories
          </h1>
          <div className="xs:columns-2 pt-6 text-center">
            <div
              className={`tag-chip ${
                tag == "Animals" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Animals")}>Animals</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Business" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Business")}>Business</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Community" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Community")}>Community</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Creative" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Creative")}>Creative</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Education" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Education")}>Education</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Emergency" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Emergency")}>Emergency</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Environment" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Environment")}>
                Environment
              </button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Events" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Events")}>Events</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Family" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Family")}>Family</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Funeral" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Funeral")}>Funeral</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Medical" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Medical")}>Medical</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Sports" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Sports")}>Sports</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Volunteer" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Volunteer")}>Volunteer</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Wishes" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Wishes")}>Wishes</button>
            </div>
            <div
              className={`tag-chip ${
                tag == "Others" ? "bg-pondo-blue text-pondo-light" : ""
              }`}
            >
              <button onClick={() => checkTag("Others")}>Others</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
