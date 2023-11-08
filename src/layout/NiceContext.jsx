import NiceIcons from "./NiceIcons"

import { useContext } from "react"
import { storage } from "../lib/Storage"

export default function NiceContext({ x, y, exit, elements }) {

    const { setPage } = useContext(storage);

    return (
        <div onMouseLeave={() => exit ? exit() : { }} style={{ top: y, left: x }}
            id="nice_context_menu"
            className="fixed text-gray-400 z-[100] p-1 rounded-lg bg-secondary border border-highlight flex flex-col items-center justify-center drop-shadow-lg"
        >
            <a onClick={() => { window.location.reload(); exit(); }} className="cursor-pointer hover:bg-highlight transition-all duration-200 hover:text-white py-1 px-3 rounded-lg w-full flex items-center justify-start gap-2"><NiceIcons type="TbReload" />Refresh</a>

            {
                elements.map((element) => (
                    <a onClick={() => { element.action(); exit(); }} className="cursor-pointer hover:bg-highlight transition-all duration-200 hover:text-white py-1 px-3 rounded-lg w-full flex items-center justify-start gap-2">
                        <NiceIcons type={element.icon} />{element.name}
                    </a>
                ))
            }

            <a onClick={() => { setPage(4); exit(); }} className="cursor-pointer hover:bg-highlight transition-all duration-200 hover:text-white py-1 px-3 rounded-lg w-full flex items-center justify-start gap-2"><NiceIcons type="TbSettings" />Settings</a>
        </div>
    )

}