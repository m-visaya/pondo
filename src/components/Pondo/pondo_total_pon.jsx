import PeopleIcon from "../../assets/people-icon.svg";

export default function PondoTotalPon() {
  return (
    <div className="flex">
      <div className="flex place-items-center">
        <img src={PeopleIcon} className="xs:w-14 lg:w-18"></img>
        <div className="px-4">
        <p className="xs: text-[16px] lg:text-[20px] font-bold text-pondo-blue">
          Total Number of Donors
        </p>
        <p className="xs: text-[14px] lg:text-[14px]">number</p>
        </div>
      </div>
    </div>
  );
}
