export default function PondoMain({
  image,
  title,
  description,
  category,
  donated,
}) {
  return (
    <div className="flex">
      <div className="max-w-2xl">
        <img className="rounded-[25px] min-w-full" src={image}></img>
        <p className="text-pondo-blue text-start font-bold text-2xl my-3">
          {title}
        </p>
        <div className="bg-pondo-light-de rounded-full w-24 p-2 mb-3 text-[12px] text-center">
          {category}
        </div>

        <div>
          <p className="text-start text-[14px] overflow-hidden">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
