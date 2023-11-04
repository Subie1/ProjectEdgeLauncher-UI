import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Navbar from "./Narbar"

import VersionManager from "../pages/VersionManager"
import ServerManager from "../pages/ServerManager"

import { useContext } from "react"
import { storage } from "../lib/Storage"
import ExperimentsManager from "../pages/ExperimentsManager"

function CurrentPage() {
    const { page } = useContext(storage);

    if (page == 0) return <VersionManager />
    if (page == 1) return <ServerManager />
    if (page == 2) return <ExperimentsManager />

    return <VersionManager />
}

export default function Layout() {
    return (
        <main className="w-full h-full bg-primary flex flex-col">
            <Navbar />
            <div className="w-full h-full flex">
                <Sidebar />
                <CurrentPage />
            </div>
            <Footer />
        </main>
    )
}