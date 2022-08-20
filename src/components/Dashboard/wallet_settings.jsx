export default function WalletSettings () {
    return(
        <div className="flex">
            <div>
                <div className="xs:w-72 md:w-96">
                    <p className="font-bold text-[20pt] text-pondo-blue text-start">Your Wallet</p>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">Connected Wallet address</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                </div>
                <div className="xs:w-72 md:w-96 mt-6">
                    <p className="font-bold text-[18pt] text-pondo-blue text-start">Change connected wallet address</p>
                    <forms>
                        <p className="text-pondo-blue text-[12pt] text-start mt-3">New Wallet address</p>
                        <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" ></input>
                        <p className="text-pondo-blue text-[12pt] text-start mt-3" >Password</p>
                        <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="password"></input>
                        <div className="flex">
                        <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 my-10">Save Changes</button>     
                        </div>
                    </forms>
                </div>
            </div>
        </div>
    )
}