import YourPondos from './components_your_pondos'

export default function DashboardPondos() {
    return(
        <div className="flex">
            <div>
            <p className="font-bold text-[20pt] text-pondo-blue text-start">Your Pondos</p>
            <div class="grid grid-cols-3 gap-4 my-6">
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            <YourPondos/>
            </div>
            </div>
        </div>
    )
}