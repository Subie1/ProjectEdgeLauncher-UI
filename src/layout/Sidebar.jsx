import * as Icons from "react-icons/tb"
import { useContext } from "react"
import { storage } from "../lib/Storage";

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function Sidebar() {
    const { page, setPage } = useContext(storage);

    const list = [
        "TbAssembly",
        "TbServer2",
        "TbCategory",
        "TbVaccine"
    ]

    return (
        <div className="w-fit h-full left group bg-primary border-r border-r-highlight flex flex-col gap-2 items-center p-3 justify-start transition-all duration-500">
            {
                list.map((item) => (
                    <a onClick={() => setPage(list.indexOf(item))} className={`${page == list.indexOf(item) ? "ring-4 ring-gray-700" : ""} cursor-pointer flex items-center justify-center w-fit h-fit p-3 rounded-lg bg-secondary`}>
                        <GetIcon type={item} />
                    </a>
                ))
            }
        </div>
    )

}