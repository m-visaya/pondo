import Navigation from '../Shared/navbar'
import Footer from '../Shared/footer'
import PondoInfo from '../Pondo/pondo_main'
import PondoOrganizer from '../Pondo/profile_avatar'
import PondoComments from '../Pondo/guest_avatar'
import PondoTarget from '../Pondo/pondo_main_goal'

export default function ProjectPondo() {
    return(
        <div>
        <Navigation />
        <div className="px-32 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
                <PondoInfo />
                <p className="text-[18pt] text-pondo-blue font-bold mt-16 mb-12">Pondo Organizer</p>
                <PondoOrganizer />
                <p className="text-[18pt] text-pondo-blue font-bold mt-12 mb-12">Pon-donor Words</p>
                <PondoComments />
            </div>
            <div>
                <PondoTarget />
            </div>
        </div>

        </div>
        <Footer />
        </div>
    )

}