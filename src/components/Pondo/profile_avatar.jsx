import avatar from "../../Assets/default_avatar.svg";

export default function UserProfile({ name }) {
  return (
    <div className="flex">
      <div className="flex place-items-center">
        <img src={avatar} className="xs:w-14 lg:w-18"></img>
        <div className="px-4">
        <p className="xs: text-[16px] lg:text-[20px] font-bold text-pondo-blue">
          {name}
        </p>
        <p className="xs: text-[14px] lg:text-[14px]">Organizer</p>
        </div>
      </div>
    </div>
  );
}
