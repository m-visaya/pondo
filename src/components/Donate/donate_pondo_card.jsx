import pondoDefault from '../../Assets/default_pondo.svg'
import UserProfile from '../../components/Pondo/profile_avatar'

export default function DonatePondoCard (){
    return(
        <div className="flex">
            <div className="max-w-xl">
                <div className="columns-2">
                <div>
                    <img src={pondoDefault} className="w-96 rounded-[25px]"/>
                </div>
                <div className="ml-2">
                    <p className="text-[22pt] leading-7 text-pondo-blue">You're supporting <span className="font-bold">Bulacan's Future</span></p>
                    <p className="text-[16pt] text-pondo-blue my-1">Pondo Organizer:</p>
                    <UserProfile/>
                </div>
                </div>
            </div>
        </div>
    )
}