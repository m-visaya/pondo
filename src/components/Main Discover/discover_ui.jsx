import Navbar from '../Shared/navbar'
import Footer from '../Shared/footer'
import DiscoverCategories from '../Main Discover/discover_categories'
import Discover from '../Main Discover/discover'

export default function DiscoverMain (){
    return(
        <div>
            <Navbar/>
            <div className="md:px-8 md:py-5 max-w-screen-xl mx-auto">
            <p className="xs:text-[22pt] md:text-[28pt] font-bold xs:px-3 xs:mt-3 xs:mb-10 mb-7 text-pondo-blue">Discover Pondos</p>
            <div className="grid xs:grid-cols-1 lg:grid-cols-3  lg:gap-x-16 lg:mb-32">
            <div className="xs:px-3 col-span-2">
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


