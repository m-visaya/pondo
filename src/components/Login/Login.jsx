import Logo from '../../Assets/Login/logo_vert.svg'

export default function Login() {
    return(
        <div className="xs:bg-pondo-light-de md:bg-pondo-light min-h-screen flex items-center justify-center">
            <div className="bg-pondo-light-de rounded-[25px] md:px-20 md:py-16">
                <div className="xs:w-screen xs:p-10 md:w-full md:p-0">
                    <img src={Logo} className="w-28 mx-auto"></img>
                    <form>
                    <div className="grid grid-cols-1 mt-6">
                        <input type="text" className="rounded-full text-center bg-pondo-light py-2 my-3" placeholder="username" ></input>
                        <input type="password" className="rounded-full text-center bg-pondo-light py-2 mb-5" placeholder="password"></input>
                        <button type="submit" className="rounded-2xl bg-pondo-blue py-3 text-pondo-light font-bold w-36 mx-auto">Sign in</button>
                    </div>
                    </form>
                    <p className="text-gray mt-5 text-center">Register</p>
                </div>
            </div>
        </div>
    )
}