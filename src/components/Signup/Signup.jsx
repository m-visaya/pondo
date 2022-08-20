import Logo from '../../Assets/Login/logo_vert.svg'

export default function Signup() {
    return(
        <div className="xs:bg-pondo-light-de md:bg-pondo-light min-h-screen flex items-center justify-center">
            <div className="bg-pondo-light-de rounded-[25px] md:px-20 md:py-16">
                <div className="xs:w-screen xs:p-10 md:w-full md:p-0">
                    <img src={Logo} className="w-28 mx-auto"></img>
                    <form>
                    <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-x-3 mt-6 place-content-center">
                        <input type="text" className="rounded-full md:col-span-2 text-center bg-pondo-light py-2 my-3" placeholder="Username" ></input>
                        <input type="email" className="rounded-full md:col-span-2 text-center bg-pondo-light py-2 my-3" placeholder="Email address" ></input>
                        <input type="password" className="rounded-full text-center bg-pondo-light py-2 my-3" placeholder="Password"></input>
                        <input type="password" className="rounded-full text-center bg-pondo-light py-2 my-3" placeholder="Confirm Password"></input>
                        <button type="submit" className="rounded-2xl md:col-span-2 bg-pondo-blue py-3 text-pondo-light font-bold mt-5 w-36 mx-auto">Sign up</button>
                    </div>
                    </form>
                    <p className="text-gray mt-5 text-center">Return to Login</p>
                </div>
            </div>
        </div>
    )
}