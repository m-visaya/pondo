export default function CreatePondoForm () {
    return(
        <div className="flex">
            <div>
                <div className="xs:w-72 md:w-96">
                    <form>
                    <p className=" text-[14pt] text-start mt-3">Pondo Image</p>
                    <input type="file" accept="image/*" class="my-4"></input>
                    <p className=" text-[14pt] text-start mt-2">Pondo Title</p>
                    <input className=" rounded-xl bg-pondo-light py-3 px-4 my-3 w-full" type="text"></input>
                    <p className=" text-[14pt] text-start mt-2">Target Goal</p>
                    <input className=" rounded-xl bg-pondo-light py-3 px-4 my-3 w-full" type="number"></input>
                    <div className="mt-3">
                    <p className=" text-[14pt] text-start mt-2">Pondo Details</p>
                    <textarea className="bg-pondo-light rounded-xl w-full max-h-36 p-5 mt-3 "></textarea>
                    </div>
                    <div className="flex mt-3">
                    <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 mt-6">Submit</button>     
                    </div>                    
                    </form>
                </div>
            </div>    
        </div>
    )
} 