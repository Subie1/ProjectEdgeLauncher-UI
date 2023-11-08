import NiceDropdown from "./NiceDropdown"
import { useContext } from "react"
import { storage } from "../lib/Storage"

import NiceIcons from "./NiceIcons"

export default function Navbar() {

    const { games, currentGame, setCurrentDescriptor } = useContext(storage);
    
    return (
        <nav className="top w-full items-center relative grid grid-cols-3 h-fit p-2 text-gray-300 bg-primary border-b border-b-highlight">
            <div className="flex items-center justify-start gap-3">
                <a onClick={() => setCurrentDescriptor("")} className="bg-secondary rounded-full p-2 cursor-pointer"><NiceIcons type="TbChevronLeft" /></a>
                <NiceDropdown className="flex-1" onSelect={(software) => window.games.setCurrentEmulationSoftware(software)} values={games} value={currentGame} />
            </div>
        </nav>
    )

}