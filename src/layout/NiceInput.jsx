export default function NiceInput({ placeholder, required, id, defaultValue, onChange, className }) {

    return (
        <input onChange={(e) => onChange ? onChange(e.target.value) : {}} className={`${className ?? ""} outline-none bg-secondary rounded-md p-3 placeholder-gray-600 text-gray-300`} id={id ?? ""} placeholder={placeholder ?? ""} required={required ?? false} value={defaultValue ?? undefined} />
    )

}