import { createContext, useState } from "react"

export const storage = createContext();
export const StorageProvider = function({ children }) {
    const [page, setPage] = useState(0);

    const [experiments, setExperiments] = useState([false, false, false]);

    return (
        <storage.Provider value={{ page, setPage, experiments, setExperiments }}>
            {children}
        </storage.Provider>
    )
}