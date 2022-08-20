import { Link } from "react-router-dom";

function DiscoverCard({ address }) {
  return (
    <Link to={`/crowdfund/hello`}>
      <h1>{address}</h1>
      <div className="">
        <a href="#!">
          <img
            className="rounded-[25px]"
            src="https://mdbootstrap.com/img/new/standard/nature/182.jpg"
            alt=""
          />
        </a>
        <div className="mx-2 mt-3">
          <h5 className="text-pondo-blue text-start font-bold text-2xl mb-2">
            Help Ocram’s headache recovery
          </h5>
          <p className="text-clip overflow-hidden text-start mb-3 max-h-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </p>
          <p className="text-pondo-blue font-bold text-start text-xl mb-4">
            ETH 0.0067 of ETH 1.00
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DiscoverCard;
