import * as Icons from "react-icons/tb"

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function Model({ open, onClose, children, title, onSubmit }) {

    return (
        <div id="subie_model" onClick={(e) => e.target.id == "subie_model" ? onClose ? onClose() : { } : { }} className={`z-30 bg-black items-center justify-center bg-opacity-40 w-screen h-screen top-0 left-0 fixed ${open ? "flex" : "hidden"}`}>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit ? onSubmit(e.target) : { } }} className="p-3 rounded-lg bg-primary flex-1 m-40 text-gray-400 flex flex-col gap-2 drop-shadow-xl">
                <div className="flex items-center justify-between mx-2">
                    <h1>{title}</h1>
                    <a onClick={() => onClose ? onClose() : {}} className="cursor-pointer">&#10005;</a>
                </div>
                {children}
                <div className="flex gap-2 w-full text-center">
                    <button type="submit" className="flex-1 p-4 rounded-lg bg-green-600 text-primary">
                        Submit
                    </button>
                    <button onClick={() => onClose ? onClose() : { }} className="flex-1 p-4 rounded-lg bg-highlight">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )

}