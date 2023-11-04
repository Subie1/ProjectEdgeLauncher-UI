import * as Icons from "react-icons/tb"
import { useContext, useState } from "react";
import { storage } from "../lib/Storage";

import Model from "../layout/Model";
import NiceInput from "../layout/NiceInput";

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function ServerManager() {

    const { servers, setServers } = useContext(storage);
    const [open, setOpen] = useState(false);

    function AddServer({ elements }) {
        let serverName;
        let serverDescription;
        let serverHost;

        for (const input of elements) {
            if (!input.placeholder) continue;

            if (input.id == "server_name") serverName = input.value.trim();
            if (input.id == "server_description") serverDescription = input.value.trim();
            if (input.id == "server_host") serverHost = input.value.trim();

            input.value = "";
        }

        if (!serverName) return setOpen(false);
        if (!serverHost) return setOpen(false);

        const copy = servers;
        copy.push({ name: serverName ?? "No Name", description: serverDescription, host: serverHost ?? "127.0.0.1", id: Math.floor(Math.random() * 99999999999) });

        setServers(copy);
        setOpen(false)
    }

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4">
            <Model onSubmit={AddServer} title="Add Server" open={open} onClose={() => setOpen(false)}>
                <NiceInput id="server_name" placeholder="Server Name" required={true} />
                <NiceInput id="server_description" placeholder="Server Description" />
                <NiceInput id="server_host" placeholder="Host" defaultValue="127.0.0.1" />
            </Model>

            <div className="w-full h-full flex flex-col justify-center items-center gap-4 overflow-hidden">
                <div className="w-full h-full grid grid-cols-3 gap-3 overflow-auto">
                    {
                        servers.map((server) => (
                            <div className="rounded-lg relative w-full h-56 server-banner">
                                <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                                <div className="flex flex-col items-start p-3 justify-between absolute w-full h-full bg-black rounded-lg bg-opacity-50">
                                    <a onClick={() => setServers(servers.filter((s) => s.id !== server.id))} className="cursor-pointer opacity-30"><GetIcon type="TbTrashFilled" /></a>
                                    <div className="flex w-full justify-between items-center justify-center">
                                        <div className="flex flex-col w-fit h-fit">
                                            <h1 className="text-white">{server.name}</h1>
                                            <span className="text-xs text-gray-500">{server.description ? server.description : "No Description"}</span>
                                        </div>
                                        <a className="w-fit cursor-pointer h-fit rounded-xl p-3 bg-green-600"><GetIcon type="TbPlayerPlayFilled" /></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <a onClick={() => setOpen(true)} className="cursor-pointer rounded-lg bg-green-800 drop-shadow-lg text-sm p-2 flex gap-2 items-center justify-center absolute bottom-2 right-2">
                <GetIcon type="TbPlus" />
                <span>Add Server</span>
            </a>
        </main>
    )

}