import { useContext } from "react"
import { storage } from "../lib/Storage"

import NiceIcons from "./NiceIcons"

export default function Sidebar() {
    const { page, setPage } = useContext(storage);

    const list = [
        "TbAssembly",
        "TbServer2",
        "TbFlask",
        "TbVaccine"
    ]

    return (
        <div className="text-white w-fit h-full left group bg-primary border-r border-r-highlight flex flex-col items-center p-3 justify-between transition-all duration-500">
            <div className="flex flex-col gap-2 items-center justify-center">
                {
                    list.map((item) => (
                        <a key={item} onClick={() => setPage(list.indexOf(item))} className={`${page == list.indexOf(item) ? "bg-green-600" : "bg-secondary"} cursor-pointer flex items-center justify-center w-fit h-fit p-3 rounded-lg`}>
                            <NiceIcons type={item} />
                        </a>
                    ))
                }
            </div>
            <div>
                <a onClick={() => setPage(4)} className={`${page == 4 ? "bg-green-600" : "bg-secondary"} cursor-pointer flex items-center justify-center w-fit h-fit p-3 rounded-lg`}>
                    <NiceIcons type="TbSettings" />
                </a>
            </div>
        </div>
    )

}