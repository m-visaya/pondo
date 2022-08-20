export default function AccountSettings () {
    return(
        <div className="flex">
            <div>
                <div className="xs:w-72 md:w-96">
                    <p className="font-bold text-[20pt] text-pondo-blue text-start">Your Account</p>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">Username</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                    <form>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">Email address</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                    <div className="flex">
                    <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 mt-6">Save Changes</button>     
                    </div>                    
                    </form>
                </div>
                <div className="xs:w-72 md:w-96 my-12">
                    <p className="font-bold text-[18pt] text-pondo-blue text-start">Personal Information</p>
                    <forms>
                        <div className="grid grid-cols-2 gap-2">
                        <div>
                        <p className="text-pondo-blue text-[12pt] text-start mt-3 col-start-1">First Name</p>
                        <input className=" rounded-full bg-pondo-light py-2 my-3 w-full col-start-1" type="text" ></input>
                        </div>
                        <div>
                        <p className="text-pondo-blue text-[12pt] text-start mt-3 col-start-2" >Last Name</p>
                        <input className=" rounded-full bg-pondo-light py-2 my-3 w-full col-start-2" type="text"></input>
                        </div>
                        </div>
                        <p className="text-[10pt] text-pondo-muted">Personal name is not required but it is highly recommended  to help users identify your pondos.</p>
                        <div className="flex">
                        <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 mt-6">Save Changes</button>     
                        </div>
                    </forms>
                </div>
                <div className="xs:w-72 md:w-96 my-12">
                    <p className="font-bold text-[20pt] text-pondo-blue text-start">Account Security</p>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">Password</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                    <form>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">New Password</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                    <p className="text-pondo-blue text-[12pt] text-start mt-3">Confrim New Password</p>
                    <input className=" rounded-full bg-pondo-light py-2 my-3 w-full" type="text" value="" readonly></input>
                    <div className="flex">
                    <button type="submit" className="rounded-full bg-pondo-blue text-pondo-light font-bold w-36 py-3 mt-6 mb-3">Save Changes</button>     
                    </div>                  
                    </form>
                </div>
                <div className="xs:w-72 md:w-96 my-12">
                    <p className="font-bold text-[20pt] text-pondo-danger text-start">Danger Zone</p>
                    <p className="my-3 text-pondo-danger">If you delete your account you will no longer be able to sign in, and all of your data will be deleted, this will also result in the closure of all of your Pondos. This action is permanent and non recoverable.</p>
                    <button type="submit" className="rounded-full bg-pondo-danger text-pondo-light font-bold w-36 py-3 mt-6 mb-3">Delete Account</button>     
                </div>
            </div>
        </div>
    )
} 