import Navigation from '../Shared/navbar'
import Footer from '../Shared/footer'
import PondoInfo from './pondo_info'
import PondoOrganizer from '../Pondo/profile_avatar'
import PondoComments from '../Pondo/pondo_comments'
import PondoTargetGoal from '../Pondo/pondo_target_goal'

export default function ProjectPondo() {
    return(
        <div>
        <Navigation />
        <div className="px-32 py-20 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2">
                <PondoInfo />
                <p className="text-[18pt] text-pondo-blue font-bold mt-16 mb-12">Pondo Organizer</p>
                <PondoOrganizer />
                <p className="text-[18pt] text-pondo-blue font-bold mt-12 mb-12">Pon-donor Words</p>
                <PondoComments />
            </div>
            <div>
                <PondoTargetGoal />
            </div>
        </div>
        </div>
        <Footer />
        </div>
    )

}