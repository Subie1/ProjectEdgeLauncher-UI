import { useContext, useState } from "react";
import { storage } from "../lib/Storage";

export default function ExperimentsManager() {

    const { experiments, setExperiments } = useContext(storage);
    const [_, setDummy] = useState(0);

    function ModifyExperiment(experiment) {
        experiments[experiment] = !experiments[experiment];
        servers.saveExperiments(experiments);

        setExperiments(experiments);
        setDummy(Math.random());
    }

    return (
        <main className="w-full h-full relative bg-primary p-3 text-gray-300 flex flex-col gap-4">
            <h1 className="text-lg">Experiments</h1>
            {
                Object.keys(experiments).map((experiment) => (
                    <label onClick={() => ModifyExperiment(experiment)} className="flex items-center cursor-pointer relative">
                        <div className="relative">
                            <div className={`transition-all duration-300 ${experiments[experiment] ? "bg-gray-800" : "bg-gray-600"} w-14 h-8 rounded-full`}></div>
                            <div className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${experiments[experiment] ? "bg-accent translate-x-full" : "bg-white"}`}></div>
                        </div>
                        <div className="ml-3 font-medium">
                            {experiment}
                        </div>
                    </label>
                ))
            }
        </main>
    )

}