import { createContext, useEffect, useState } from "react"
import useBinder from "../hooks/useBinder"
import SplashScreen from "../layout/SplashScreen"

export const storage = createContext();
export const StorageProvider = function({ children }) {
    const [page, setPage] = useState(0);
    const [debug, setDebug] = useState(false);
    
    const [experiments, setExperiments] = useState([]);
    const [servers, setServers] = useState([]);
    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState([]);

    const [canLoadUI, setCanLoadUI] = useState(false);

    const [loaded] = useBinder(debug);

    useEffect(() => {
        if (!loaded) return;

        setGames(window.games.getEmulationSoftwares());
        setExperiments(window.experiments.get());
        setServers(window.servers.get());
        setCurrentGame(window.games.getCurrentEmulationSoftware());

        setCanLoadUI(true);
    }, [loaded]);

    return (
        <storage.Provider value={{ page, setPage, experiments, setExperiments, servers, setServers, debug, setDebug, games, currentGame }}>
            {
                canLoadUI ? children : <SplashScreen />
            }
        </storage.Provider>
    )
}