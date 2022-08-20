import Navbar from '../Shared/navbar'
import Footer from '../Shared/footer'
import DiscoverCategories from '../Main Discover/discover_categories'
import Discover from '../Main Discover/discover'

export default function DiscoverMain (){
    return(
        <div>
            <Navbar/>
            <div className="px-8 py-5 max-w-screen-xl mx-auto">
            <p className="text-[28pt] font-bold mt-10 mb-7 text-pondo-blue">Discover Pondos</p>
            <div className="grid grid-cols-3 gap-x-16 mb-32">
            <div className="col-span-2">
            <Discover/>
            </div>
            <div className="col-span-1">
            <DiscoverCategories />
            </div>
            </div>  
            </div>
            <Footer/>
        </div>
    )
}


