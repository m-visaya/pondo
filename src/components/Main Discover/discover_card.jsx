import { Link } from "react-router-dom";

function DiscoverCard() {
  return (
    <Link to={`/crowdfund/hello`}>
      <div className="">
        <a href="#!">
          <img
            className="xs:rounded-[15px] md:rounded-[25px]"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div className="mx-2 mt-3">
          <h5 className="text-pondo-blue text-start font-bold xs:leading-5 xs:text-[12pt] md:text-2xl mb-1">
            Help Ocram’s headache recovery
          </h5>
          <p className="text-clip overflow-hidden text-start mb-1 xs:text-[10pt] md:text-[12pt] xs:max-h-10 md:max-h-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
          <p className="text-pondo-blue font-bold text-start xs:text-[11pt] md:text-[14pt] mb-4">
            ETH 0.0067 of ETH 1.00
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DiscoverCard;
