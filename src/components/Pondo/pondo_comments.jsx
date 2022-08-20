import avatar from "../../Assets/default_avatar.svg";

export default function GuestProfile() {
  return (
    <div className="flex">
      <div className="grid grid-rows-3 grid-flow-col gap-x-5 text-start">
        <div className="row-span-3 flex place-items-center">
          <img src={avatar} className="xs:w-14 lg:w-18"></img>
        </div>
        <div className="col-span-2">
          <p className="xs: text-[12px] md:text-[16px] font-bold text-pondo-blue">
            Anonymous Pon
          </p>
        </div>
        <div className="col-span-2">
          <p className="xs: text-[12px] md:text-[14px] font-bold ">ETH 0.10</p>
        </div>
        <div className="col-span-2">
          <p className="xs: text-[10px] md:text-[12px]">
            Ge Talon.sksksksksksk
          </p>
        </div>
      </div>
    </div>
  );
}
