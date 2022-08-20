import Navigation from "../Shared/navbar";
import DonatePondoCard from "./donate_pondo_card";

export default function DonateUI() {
    return(
        <div>
        <Navigation/>    
        <div className="flex justify-center min-h-1/2">
            <div className="px-1 py-16 max-w-screen-xl mx-auto">
            <DonatePondoCard/>

            <p className="mt-10 mb-4 text-[20pt] text-pondo-blue font-bold">Smart Contract Details:</p>

            <div className="bg-pondo-light h-48 rounded-[25px]">
            </div>

            <p className="mt-8 mb-4 text-[20pt] text-pondo-blue font-bold">Leave a message:</p>

            <form> 
                <input type="text" className="py-2 bg-pondo-light rounded-full w-64 px-5" placeholder="Anonymous"></input>
                <div className="mt-3">
                <textarea className="bg-pondo-light rounded-[25px] w-full max-h-36 p-5 mt-3 " placeholder="Message"></textarea>
                </div>
                <div>
                <button type="submit" className="rounded-2xl bg-pondo-blue py-3 text-pondo-light font-bold w-36 mt-4">Verify</button>    
                </div>
            </form>
            
            </div>
        </div>
        </div>
    )
}