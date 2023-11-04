import * as Icons from "react-icons/tb"

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-xl" />
    )
}

export default function Navbar() {
    
    return (
        <nav className="top w-full h-fit p-2 text-gray-300 bg-primary border-b border-b-highlight">
            <div className="w-fit h-fit rounded-md p-1 flex bg-secondary items-center justify-center gap-2">
                <span className="p-2 bg-opacity-10 bg-highlight rounded-md">School of Dragons</span>
                <GetIcon type="TbChevronDown" />
            </div>
        </nav>
    )

}