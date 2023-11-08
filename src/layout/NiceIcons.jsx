import * as Icons from "react-icons/tb"

export default function NiceIcons({ type, className }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className={`text-xl ${className}`} />
    )
}