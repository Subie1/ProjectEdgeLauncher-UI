import { createContext, useEffect, useState } from "react"
import useBinder from "../hooks/useBinder"
import SplashScreen from "../layout/SplashScreen"
import DescriptorDecider from "../pages/DescriptorDecider"

export const storage = createContext();
export const StorageProvider = function({ children }) {
    const [page, setPage] = useState(0);
    const [debug, setDebug] = useState(true);
    
    const [experiments, setExperiments] = useState([]);
    const [servers, setServers] = useState([]);
    const [games, setGames] = useState([]);
    const [currentGame, setCurrentGame] = useState([]);
    const [clientVersions, setClientVersions] = useState([]);
    const [desciptor, setCurrentDescriptor] = useState("");
    const [payloads, setPayloads] = useState([]);

    const [customContextElements, setCustomContextElements] = useState([]);

    const [canLoadUI, setCanLoadUI] = useState(false);
    const [loaded] = useBinder(debug);

    useEffect(() => {
        if (!loaded) return;

        setGames(window.games.getEmulationSoftwares());
        setExperiments(window.experiments.get());
        setServers(window.servers.get());
        setCurrentGame(window.games.getCurrentEmulationSoftware());
        setClientVersions(window.games.getVersions());
        setPayloads(window.payloads.get());

        setCanLoadUI(true);
    }, [loaded, desciptor]);

    return (
        <storage.Provider value={{ customContextElements, setCustomContextElements, payloads, setPayloads, desciptor, setCurrentDescriptor, clientVersions, setClientVersions, page, setPage, experiments, setExperiments, servers, setServers, debug, setDebug, games, currentGame }}>
            {
                canLoadUI ? desciptor.length ? children : <DescriptorDecider /> : <SplashScreen />
            }
        </storage.Provider>
    )
}