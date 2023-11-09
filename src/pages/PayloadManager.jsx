import * as $ from "jquery";
import { useContext, useState } from "react"
import { storage } from "../lib/Storage"

import NiceIcons from "../layout/NiceIcons"

export default function PayloadManager() {

    const { payloads, setPayloads, setCustomContextElements } = useContext(storage);
    const [_, setDummy] = useState(0);

    function RemovePayload(payload) {
        const newPayloads = payloads.filter((p) => p !== payload);

        window.payloads.save(newPayloads);
        setPayloads(newPayloads);
    }

    function LaunchExplorer() {
        $("#payload_file_manager").trigger("click");
    }

    function HandlePayloadSelection(e) {
        const files = Array.from(e.target.files);

        if (!files[0]) return;
        // if (!files[0].name.endsWith(".spf")) return;

        const path = window.URL.createObjectURL(files[0]);
        payloads.push({ file: files[0].name, path });

        window.payloads.save(payloads);
        setPayloads(payloads);
        setDummy(Math.random());
    }

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4 overflow-auto">
            <div className="bg-secondary border border-highlight rounded-lg p-4">
                <div className="flex items-center justify-center font-bold">
                    <p>Payloads</p>
                </div>
                <div className="flex flex-col gap-2 [&>*]:py-2 [&>*]:border-b [&>*]:border-highlight [&>*:nth-child(even)]:bg-primary [&>*:nth-child(even)]:bg-opacity-20 [&>*]:p-2">
                    {
                        payloads.map((payload) => (
                            <div onContextMenu={() => {
                                setCustomContextElements([
                                    {
                                        name: "Delete",
                                        icon: "TbTrashFilled",
                                        action: () => {
                                            RemovePayload(payload);
                                        }
                                    }
                                ])
                            }} key={payload.file} className="flex items-center justify-between">
                                <tr className="flex items-center justify-start gap-2">
                                    <td onClick={() => RemovePayload(payload)} className="w-fit h-fit cursor-pointer"><NiceIcons className="!text-gray-400" type="TbTrashFilled" /></td>
                                    <td>{payload.name ?? payload.file}</td>
                                </tr>
                                <tr>
                                    <td>{payload.file}</td>
                                </tr>
                            </div>
                        ))
                    }
                </div>
            </div>
            <a onClick={LaunchExplorer} className="cursor-pointer rounded-lg bg-green-800 drop-shadow-lg text-sm p-2 flex gap-2 items-center justify-center fixed bottom-9 right-2">
                <NiceIcons type="TbPlus" />
                <span>Add Payload</span>
            </a>
            <input multiple={false} accept=".spf" id="payload_file_manager" type="file" onChange={HandlePayloadSelection} className="fixed hidden" />
        </main>
    )

}