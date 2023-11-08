import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

import { useContext, useEffect, useState } from "react"
import { storage } from "../lib/Storage"

import VersionManager from "../pages/VersionManager"
import ServerManager from "../pages/ServerManager"
import ExperimentsManager from "../pages/ExperimentsManager"
import SettingsManager from "../pages/SettingsManager"
import PayloadManager from "../pages/PayloadManager"
import NiceContext from "./NiceContext"

function CurrentPage() {
    const { page } = useContext(storage);

    if (page == 0) return <VersionManager />
    if (page == 1) return <ServerManager />
    if (page == 2) return <ExperimentsManager />
    if (page == 3) return <PayloadManager />
    if (page == 4) return <SettingsManager />

    return <VersionManager />
}

export default function Layout() {

    const { customContextElements, setCustomContextElements } = useContext(storage);

    const [context, setContext] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function HandleContextMenu(event) {
        event.preventDefault();

        const x = (event.pageX - 10) + "px";
        const y = (event.pageY - 10) + "px";

        setPosition({ x, y });
        setContext(true);
    }

    return (
        <main onContextMenu={(event) => HandleContextMenu(event)} className="w-full h-full bg-primary flex flex-col">
            {context ? <NiceContext elements={customContextElements} exit={() => { setContext(false); setCustomContextElements([]); }} x={position.x} y={position.y} /> : ""}
            <Navbar />
            <div className="w-full h-full flex flex-1">
                <Sidebar />
                <CurrentPage />
            </div>
            <Footer />
        </main>
    )
}