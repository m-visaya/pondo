import avatar from '../../Assets/default_avatar.svg'

export default function DashboardNav(){
    return(
        <div className="flex text-center">
            <div className="bg-pondo-light rounded-[25px]">
                <div className="w-64 p-10">
                    <img src={avatar} className="w-24 mx-auto"></img>
                    <p className="font-bold text-[16pt] text-pondo-blue mt-3">Ocram Yosi</p>
                    <div className ="bg-pondo-blue text-pondo-light rounded-[25px] p-2 mb-2 mt-4">
                        <button className="font-bold hover:text-pondo-light-de text-sm">Create a Pondo</button>
                    </div>
                    <div className ="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-2 my-4">
                        <button className="font-bold text-sm">Pondos</button>
                    </div>
                    <div className ="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-2 my-4">
                        <button className="font-bold text-sm">Wallet</button>
                    </div>
                    <div className ="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-2 my-4">
                        <button className="font-bold text-sm">Account</button>
                    </div>
                    <div className ="bg-pondo-light-de hover:bg-pondo-hover rounded-[25px] p-2 my-4">
                        <button className="font-bold text-sm">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}