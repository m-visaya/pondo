import Navigation from '../Shared/navbar'
import Footer from '../Shared/footer'
import DashboardNav from '../Dashboard/dashboard_nav'
import DashboardWallet from '../Dashboard/wallet_settings'
import DashboardAccount from '../Dashboard/account_settings'
import DashboardPondos from '../Dashboard/dashboard_pondos'

export default function Dashboard() {
    return(
        <div>
            <Navigation/>
            <div className="px-32 py-5 max-w-screen-xl mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    <div className="col-span-1">
                    <DashboardNav />
                    </div>
                    <div className="col-span-2">
                    <DashboardPondos/>    
                    <DashboardWallet/>
                    <DashboardAccount/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}