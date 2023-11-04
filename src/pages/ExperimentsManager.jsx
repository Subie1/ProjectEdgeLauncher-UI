import * as Icons from "react-icons/tb"
import { useContext, useState } from "react";
import { storage } from "../lib/Storage";

function GetIcon({ type }) {
    const Result = Icons[type] ?? Icons.TbCircleMinus;

    return (
        <Result className="text-white text-xl" />
    )
}

export default function ExperimentsManager() {

    const { experiments, setExperiments } = useContext(storage);
    const [_, setDummy] = useState(0);

    const list = [
        "1.x/2.x Inventory enhancements",
        "Support for V1 achievement system (gameplay rewards)",
        "Multiplayer Support (EXTREMELY WIP, LAN ONLY AT THE MOMENT)"
    ]

    function ModifyExperiment(index) {
        const copy = experiments;
        copy[index] = !copy[index];

        setExperiments(copy);
        setDummy(Math.random());
    }

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4">
            <h1 className="text-lg">Experiments</h1>
            {
                list.map((experiment) => (
                    <label onClick={() => ModifyExperiment(list.indexOf(experiment))} for={`experiment_${experiment}`} class="flex items-center cursor-pointer relative">
                        <div class="relative">
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${experiments[list.indexOf(experiment)] ? "translate-x-full bg-accent" : ""}`}></div>
                        </div>
                        <div class="ml-3 font-medium">
                            {experiment}
                        </div>
                    </label>
                ))
            }
        </main>
    )

}