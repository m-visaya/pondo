import avatar from './Assets/default_avatar.svg'

export default function guestProfile (){
    return(
        <div className="flex justify-center my-10">
            <div class="grid grid-rows-3 grid-flow-col gap-x-5 text-start">
                <div class="row-span-3 flex place-items-center">
                    <img src={avatar} className="xs:w-14 lg:w-20"></img>
                </div>
                <div class="col-span-2">
                    <p className="xs: text-[14px] md:text-[16px] font-bold text-pondo-blue">Anonymous Pon</p>
                </div>
                <div class="col-span-2">
                    <p className="xs: text-[14px] md:text-[16px] font-bold ">ETH 0.10</p>
                </div>
                <div class="col-span-2">
                    <p className="xs: text-[12px] md:text-[14px]">Ge Talon.sksksksksksk</p>
                </div>
            </div>
        </div>
        
    )
}