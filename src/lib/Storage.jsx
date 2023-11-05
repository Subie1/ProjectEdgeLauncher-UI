import { createContext, useEffect, useState } from "react"
import useBinder from "../hooks/useBinder"
import SplashScreen from "../layout/SplashScreen";
import useSessionStorage from "../hooks/useSessionStorage";

export const storage = createContext();
export const StorageProvider = function({ children }) {
    const [page, setPage] = useState(0);

    const [debug, setDebug] = useSessionStorage("debug_environment", false);
    const [experiments, setExperiments] = useSessionStorage("experiments", []);
    const [servers, setServers] = useSessionStorage("servers", []);

    const [loaded] = useBinder(true);

    useEffect(() => {
        if (!loaded) return;

        setExperiments(window.servers.getExperiments());
        setServers(window.servers.getServers());
    }, [loaded]);

    return (
        <storage.Provider value={{ page, setPage, experiments, setExperiments, servers, setServers, debug, setDebug }}>
            {
                loaded ? children : <SplashScreen />
            }
        </storage.Provider>
    )
}