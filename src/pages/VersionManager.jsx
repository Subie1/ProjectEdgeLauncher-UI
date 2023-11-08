import { useContext } from "react";
import * as Icons from "react-icons/tb"
import { storage } from "../lib/Storage";

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function VersionManager() {
    const { clientVersions, setCustomContextElements } = useContext(storage);

    return (
        <main className="w-full h-full relative bg-primary p-4 text-gray-300 flex flex-col gap-4 overflow-auto">
            <h1 className="text-xl">Client Versions</h1>
            <div className="w-full h-fit flex flex-col gap-2 items-center justify-start">
                {
                    clientVersions.map((v) => (
                        <div onContextMenu={() => {
                            setCustomContextElements([
                                {
                                    name: "Manage Version",
                                    icon: "TbPencil"
                                },
                                {
                                    name: "Download Assets",
                                    icon: "TbDownload"
                                },
                                {
                                    name: "Properties",
                                    icon: "TbMenu2"
                                }
                            ])
                        }} key={v} className="w-full h-fit border border-highlight px-4 py-3 rounded-lg flex items-center justify-between bg-secondary">
                            <span id="version">v{v}</span>
                            <div className="flex gap-2 items-center justify-center">
                                <a className="cursor-pointer w-fit h-fit p-2 rounded-lg bg-primary">
                                    <GetIcon type="TbTerminal2" />
                                </a>
                                <a className="cursor-pointer w-fit h-fit p-2 rounded-lg bg-green-700">
                                    <GetIcon type="TbArrowBigRightLineFilled" />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a className="cursor-pointer rounded-lg bg-green-800 drop-shadow-lg text-sm p-2 flex gap-2 items-center justify-center fixed bottom-9 right-2">
                <GetIcon type="TbPlus" />
                <span>Install Client</span>
            </a>
        </main>
    )
}