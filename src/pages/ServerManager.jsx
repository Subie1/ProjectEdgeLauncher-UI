import * as Icons from "react-icons/tb"

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function ServerManager() {

    const list = [
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
        { host: "127.0.0.1", description: "No Description", name: "Test Server" },
    ]

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4">
            <div className="w-full h-full flex flex-col justify-center items-center gap-4 overflow-hidden">
                <div className="w-full h-full grid grid-cols-3 gap-3 overflow-auto">
                    {
                        list.map((server) => (
                            <div className="rounded-lg relative w-full h-56 server-banner">
                                <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                                <div className="flex items-end p-3 justify-between absolute w-full h-full bg-black rounded-lg bg-opacity-50">
                                    <div className="flex flex-col w-fit h-fit">
                                        <h1 className="text-white">{server.name}</h1>
                                        <span className="text-xs text-gray-500">{server.description}</span>
                                    </div>
                                    <a className="w-fit h-fit rounded-full p-3 bg-green-600"><GetIcon type="TbPlayerPlayFilled" /></a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <a className="cursor-pointer rounded-lg bg-green-800 drop-shadow-lg text-sm p-2 flex gap-2 items-center justify-center absolute bottom-2 right-2">
                <GetIcon type="TbPlus" />
                <span>Add Server</span>
            </a>
        </main>
    )

}