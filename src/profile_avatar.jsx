import avatar from './Assets/default_avatar.svg'

export default function userProfile (){
    return(
        <div className="flex justify-center my-10">
            <div className="flex place-items-center">
            <img src={avatar} className="xs:w-14 lg:w-20"></img>
            <p className="xs: text-[16px] lg:text-[26px] font-bold text-pondo-blue px-4">Ocram Yosi Boi</p>
            </div>
        </div>
    )
}