import { useState } from "react"

import NiceIcons from "./NiceIcons"

export default function NiceDropdown({ values, value, onSelect, className }) {

    const [selected, setSelected] = useState(value);
    const [opened, setOpened] = useState(false);

    return (
        <div className={`flex flex-col relative gap-3 ${className ?? ""}`}>
            <div onClick={() => setOpened(!opened)} className="flex gap-4 cursor-pointer items-center justify-between px-3 rounded-md py-2 bg-secondary drop-shadow-lg">
                <p className="flex items-center justify-center gap-2">{selected.icon ? <img src={selected.icon} className="w-6 h-6 rounded-full" /> : ""}{selected.name}</p>
                <a onClick={() => setOpened(!opened)} className="cursor-pointer"><NiceIcons type={opened ? "TbChevronUp" : "TbChevronDown"} /></a>
            </div>
            <div onMouseLeave={() => setOpened(false)} className={`w-full bg-secondary ${opened ? "flex" : "hidden"} flex-col rounded-md absolute z-50 top-12 drop-shadow-lg`}>
                {
                    values.map((item) => (
                        <a onClick={() => { setSelected(item); setOpened(!opened); (onSelect ? onSelect(item) : { }) }} className={`hover:bg-highlight flex gap-2 items-center justify-start ${selected == item ? "bg-highlight" : "bg-secondary"} px-3 py-2 rounded-md cursor-pointer`} key={item.id}>{selected == item ? <NiceIcons type="TbCheck" /> : ""}{item.name}</a>
                    ))
                }
            </div>
        </div>
    )

}