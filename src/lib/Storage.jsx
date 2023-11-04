import { createContext, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage";

export const storage = createContext();
export const StorageProvider = function({ children }) {
    const [page, setPage] = useState(0);
    const [experiments, setExperiments] = useLocalStorage("experiments", [false, false, false]);

    const [servers, setServers] = useLocalStorage("servers", [])

    return (
        <storage.Provider value={{ page, setPage, experiments, setExperiments, servers, setServers }}>
            {children}
        </storage.Provider>
    )
}