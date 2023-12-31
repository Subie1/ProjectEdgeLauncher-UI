import * as uuid from "uuid"
import { useContext, useState } from "react"
import { storage } from "../lib/Storage"

import Model from "../layout/Model"
import NiceInput from "../layout/NiceInput"
import NiceIcons from "../layout/NiceIcons"

export default function ServerManager() {

    const { servers, setServers, setCustomContextElements, serverConfig } = useContext(storage);
    const [open, setOpen] = useState(false);

    const [hostInput, setHostInput] = useState("127.0.0.1");
    const [advancedOptions, setAdvancedOptions] = useState(false);

    function AddServer({ elements }) {
        let serverName;
        let serverDescription;
        let serverHost;

        const config = {};

        for (const input of elements) {
            if (!input.placeholder) continue;

            if (input.id == "server_name") serverName = input.value.trim();
            if (input.id == "server_description") serverDescription = input.value.trim();
            if (input.id == "server_host") serverHost = input.value.trim();

            if (input.id == "gameplay_api_server") config["gameplay_api"] = { host: input.value.trim() };
            if (input.id == "gameplay_api_port") config["gameplay_api"]["port"] = input.value.trim();

            if (input.id == "common_api_server") config["common_api"] = { host: input.value.trim() };
            if (input.id == "common_api_port") config["common_api"]["port"] = input.value.trim();

            if (input.id == "social_api_server") config["social_api"] = { host: input.value.trim() };
            if (input.id == "social_api_port") config["social_api"]["port"] = input.value.trim();

            if (input.id == "smartfox_server") config["smartfox"] = { host: input.value.trim() };
            if (input.id == "smartfox_port") config["smartfox"]["port"] = input.value.trim();

            input.value = "";
        }

        console.log(config);

        if (!serverName) return setOpen(false);
        if (!serverHost) return setOpen(false);

        const copy = servers;
        copy.push({ name: serverName ?? "No Name", description: serverDescription, host: serverHost ?? "127.0.0.1", id: uuid.v4(), ...config });

        window.servers.save(copy);

        setServers(copy);
        setOpen(false);
    }

    return (
        <main className="flex-1 relative bg-primary p-3 text-gray-300 flex flex-col gap-4 overflow-auto">
            <Model onSubmit={AddServer} title="Add Server" open={open} onClose={() => setOpen(false)}>
                <NiceInput id="server_name" placeholder="Server Name" required={true} />
                <NiceInput id="server_description" placeholder="Server Description" />
                <NiceInput onChange={(value) => setHostInput(value)} id="server_host" placeholder="Host" defaultValue={hostInput} />
                <a onClick={() => setAdvancedOptions(!advancedOptions)} className="w-full text-right cursor-pointer flex items-center justify-end gap-2 text-gray-200">Advanced Options <NiceIcons type={advancedOptions ? "TbChevronUp" : "TbChevronDown"} /></a>
                <div className={`${advancedOptions ? "block" : "hidden"} w-full h-fit flex flex-col gap-2`}>
                    <div className="flex items-center justify-center gap-2">
                        <NiceInput onChange={(value) => setHostInput(value)} defaultValue={hostInput} className="flex-1" id="gameplay_api_server" placeholder="Gameplay API Server" />
                        <NiceInput defaultValue={serverConfig.gameplay_api.port} className="w-20 text-center" id="gameplay_api_port" placeholder="Port" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <NiceInput onChange={(value) => setHostInput(value)} defaultValue={hostInput} className="flex-1" id="common_api_server" placeholder="Common API Server" />
                        <NiceInput defaultValue={serverConfig.common_api.port} className="w-20 text-center" id="common_api_port" placeholder="Port" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <NiceInput onChange={(value) => setHostInput(value)} defaultValue={hostInput} className="flex-1" id="social_api_server" placeholder="Social API Server" />
                        <NiceInput defaultValue={serverConfig.social_api.port} className="w-20 text-center" id="social_api_port" placeholder="Port" />
                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <NiceInput onChange={(value) => setHostInput(value)} defaultValue={hostInput} className="flex-1" id="smartfox_server" placeholder="Smartfox Server" />
                        <NiceInput defaultValue={serverConfig.smartfox.port} className="w-20 text-center" id="smartfox_port" placeholder="Port" />
                    </div>
                </div>
            </Model>
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full max-h-0 grid grid-cols-3 gap-3">
                    {
                        servers.map((server) => (
                            <div onContextMenu={() => {
                                setCustomContextElements([
                                    {
                                        name: "Delete",
                                        icon: "TbTrashFilled",
                                        action: () => {
                                            setServers(servers.filter((s) => s.id !== server.id));
                                            window.servers.save(servers.filter((s) => s.id !== server.id));
                                        }
                                    }
                                ])
                            }}

                                key={server.id} className="rounded-lg relative w-full h-56 server-banner">

                                <div className="absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent rounded-lg"></div>
                                <div className="flex flex-col items-start p-3 justify-between absolute w-full h-full bg-black rounded-lg bg-opacity-50">
                                    <a onClick={() => { setServers(servers.filter((s) => s.id !== server.id)); window.servers.save(servers.filter((s) => s.id !== server.id)); }} className="cursor-pointer opacity-30"><NiceIcons type="TbTrashFilled" /></a>
                                    <div className="flex w-full justify-between items-center">
                                        <div className="flex flex-col w-fit h-fit">
                                            <h1 className="text-white">{server.name}</h1>
                                            <span className="text-xs text-gray-500">{server.description ? server.description : "No Description"}</span>
                                        </div>
                                        <a className="w-fit cursor-pointer h-fit rounded-xl p-3 bg-green-600"><NiceIcons type="TbPlayerPlayFilled" /></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <a onClick={() => setOpen(true)} className="cursor-pointer rounded-lg bg-green-800 drop-shadow-lg text-sm p-2 flex gap-2 items-center justify-center fixed bottom-9 right-2">
                <NiceIcons type="TbPlus" />
                <span>Add Server</span>
            </a>
        </main>
    )

}