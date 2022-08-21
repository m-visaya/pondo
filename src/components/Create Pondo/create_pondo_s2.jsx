import ArrowReturn from "../../assets/arrow_back.svg"
import CreatePondoForm from "./create_pondo_form"

export default function CreatePondoS1(){
    return(
        <div className="grid grid-cols-3 max-w-screen-xl mx-auto">
        <div className="col-span-1">
            <div className="min-h-screen min-w-screen bg-pondo-blue">
                <div className="flex justify-center mx-auto">
                 <p className="text-[28pt] pt-36 mx-16 text-white">Tell the people more about your Pondo.</p>
                </div>
            </div>
        </div>
        <div className="col-span-2">
            <div className="flex justify-center mx-auto">
                <div className="pt-36 mx-16">
                <CreatePondoForm/>
                </div>
            </div>
        </div>
        </div>
    )
}