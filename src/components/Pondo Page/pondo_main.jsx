import pondoDefault from '../../Assets/default_pondo.svg'

export default function PondoMain () {
    return(
        <div className="flex">
            <div className="max-w-2xl">
                <img className="rounded-[25px]" src={pondoDefault}></img>
                <p className="text-pondo-blue text-start font-bold text-2xl my-3">
                Help Ocram’s headache recovery
                </p>
                <div className ="bg-pondo-light-de rounded-full w-24 p-2 mb-3 text-[12px] text-center">Medical</div>
                <div>
                <p className="text-start text-[14px] overflow-hidden">
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
            </div>
        </div>
    )
}