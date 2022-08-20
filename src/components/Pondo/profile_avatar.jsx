import avatar from '../../Assets/default_avatar.svg'

export default function UserProfile (){
    return(
        <div className="flex">
            <div className="flex place-items-center">
            <img src={avatar} className="xs:w-14 lg:w-18"></img>
            <p className="xs: text-[16px] lg:text-[20px] font-bold text-pondo-blue px-4">Ocram Yosi Boi</p>
            </div>
        </div>
    )
}