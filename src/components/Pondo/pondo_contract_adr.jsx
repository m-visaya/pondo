import EthIcon from "../../assets/eth-icon.svg";

export default function PondoContract() {
  return (
    <div className="flex">
      <div className="flex place-items-center">
        <img src={EthIcon} className="xs:w-14 lg:w-18"></img>
        <div className="px-4">
        <p className="xs: text-[16px] lg:text-[20px] font-bold text-pondo-blue">
          Smart Contract Address
        </p>
        <p className="xs: text-[14px] lg:text-[14px]">0x123khdasflkjhsdvkjlasdbfkjbasdvkjbj</p>
        </div>
      </div>
    </div>
  );
}
