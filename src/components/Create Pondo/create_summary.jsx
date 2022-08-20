import PondoDefault from "../../assets/default_pondo.svg"

export default function CreateSummary () {
    return(
        <div className="flex">
            <div>
                <div className="xs:w-72 md:w-96">

                <img className="rounded-[25px]" src={PondoDefault}></img>
                <p className="text-pondo-blue text-start font-bold text-[18pt] my-3">
                Help Ocram’s headache recovery
                </p>
                <p className="text-pondo-blue text-start leading-3 font-bold text-[14pt] my-3">
                ETH 1.2 Target
                </p>
                <div className ="bg-pondo-light-de rounded-full w-24 py-1 my-5 text-[12px] text-center">Medical</div>
                <div>
                <p className="text-start text-[14px] max-h-32 overflow-hidden">
                    Viverra justo nec ultrices dui sapien eget mi proin. Rutrum tellus pellentesque eu tincidunt
                    tortor aliquam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Dignissim diam quis enim 
                    lobortis scelerisque fermentum dui. Turpis egestas pretium aenean pharetra. Erat imperdiet sed 
                    euismod nisi porta lorem mollis aliquam. Vel fringilla est ullamcorper eget. Donec massa sapien
                    faucibus et molestie ac feugiat. Orci dapibus ultrices in iaculis nunc sed. Dictumst vestibulum 
                    rhoncus est pellentesque. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
                    Senectus et netus et malesuada fames. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. 
                    Enim lobortis scelerisque fermentum dui faucibus. Arcu cursus euismod quis viverra. Nulla malesuada 
                    pellentesque elit eget gravida.                    
                </p>
                </div>
                    <div className="flex mt-3">
                    <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-32 py-3 mt-6 mr-3">Confirm</button>     
                    <button type="submit" className="rounded-full bg-pondo-light-de font-bold w-32 py-3 mt-6">Cancel</button>     
                    </div>                    
                </div>
            </div>    
        </div>
    )
} 