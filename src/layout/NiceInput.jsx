export default function NiceInput({ placeholder, required, id, defaultValue }) {

    return (
        <input className="outline-none bg-secondary rounded-md p-3 placeholder-gray-600 text-gray-300" id={id ?? ""} placeholder={placeholder ?? ""} required={required ?? false} value={defaultValue ?? undefined} />
    )

}