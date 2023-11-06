import NiceDropdown from "./NiceDropdown"
import { useContext } from "react"
import { storage } from "../lib/Storage"

export default function Navbar() {

    const { games, currentGame } = useContext(storage);
    
    return (
        <nav className="top w-full grid grid-cols-4 h-fit p-2 text-gray-300 bg-primary border-b border-b-highlight">
            <NiceDropdown onSelect={(software) => window.games.setCurrentEmulationSoftware(software)} values={games} value={currentGame} />
        </nav>
    )

}