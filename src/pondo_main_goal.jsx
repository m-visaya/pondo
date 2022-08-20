export default function pondoGoal (){
    return(
        <div>
            <div className="flex justify-center text-center my-10">
            <div className="bg-pondo-light md:rounded-[25px] p-6 xs:w-full md:w-64 lg:w-72">
                <div className="p-5">
                <div className="text-start">
                <p className="text-pondo-blue font-bold text-[24pt]">ETH 0.247</p>
                <p className="text-pondo-blue font-bold text-[16pt] leading-5">raised of</p>
                <p className="text-pondo-blue font-bold text-[18pt]">ETH 1.25 goal</p>
                </div>
                <div className ="bg-pondo-blue text-pondo-light rounded-[25px] p-3 mb-3 mt-6">
                    <button className="font-bold">Donate</button>
                </div>
                <div className ="bg-pondo-light-de rounded-[25px] p-3 mb-3">
                    <button className="font-bold">Share</button>
                </div>
                </div>
            </div>    
            </div>
        </div>
    )
}