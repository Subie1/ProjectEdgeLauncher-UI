import { useContext } from "react"
import { storage } from "../lib/Storage"

export default function DescriptorDecider() {

    const { setCurrentDescriptor } = useContext(storage);

    function ChangeGame(game) {
        setCurrentDescriptor(game.id);
        window.games.setCurrentDescriptor(game.id);
    }

    return (
        <main onContextMenu={(event) => event.preventDefault(true)} className="w-full h-full p-3 grid grid-cols-3 gap-4">
            {
                window.games.getDescriptors().map((game) => (
                    <a key={game.id} onClick={() => ChangeGame(game)} className="bg-secondary relative group hover:scale-105 transition-all duration-100 cursor-pointer z-20 p-3 h-fit flex flex-col gap-3 rounded-lg overflow-hidden drop-shadow-lg">
                        <div className="bg-black blur-lg opacity-40 group-hover:opacity-0 transition-all duration-100 w-full h-full absolute z-20 top-0 left-0"></div>
                        <img className="rounded-md drop-shadow-lg h-56" src={game.icon} />
                        <div className="flex flex-col w-full items-start justify-center text-gray-300">
                            <p>{game.name}</p>
                            <span className="text-xs text-gray-600">{game.version}</span>
                        </div>
                    </a>
                ))
            }
            <div className="fixed top-0 left-0 w-full h-56 bg-gradient-to-t from-transparent via-transparent to-green-700 opacity-20"></div>
        </main>
    )

}