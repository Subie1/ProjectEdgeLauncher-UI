import { useContext, useState } from "react";
import { storage } from "../lib/Storage";

export default function SettingsManager() {

    const { debug, setDebug } = useContext(storage);

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4 overflow-auto">
            <h1 className="text-lg">Settings</h1>
            <label onClick={() => setDebug(!debug)} className="flex items-center cursor-pointer relative">
                <div className="relative">
                    <div className={`transition-all duration-300 ${debug ? "bg-gray-800" : "bg-gray-600"} w-14 h-8 rounded-full`}></div>
                    <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${debug ? "bg-accent translate-x-full" : "bg-white"}`}></div>
                </div>
                <div className="ml-3 font-medium">
                    Debug Mode (USE IF YOU KNOW WTF YOU'RE DOING)
                </div>
            </label>
        </main>
    )

}