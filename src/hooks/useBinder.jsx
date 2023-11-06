import * as uuid from "uuid"
import { useState } from "react"
import useLocalization from "./useLocalization"

export default function useBinder(DEV_ENVIRONMENT = false) {
    useLocalization(DEV_ENVIRONMENT);

    const [loaded, setLoaded] = useState(false);

    if (!window.servers) window.servers = {};
    if (!window.experiments) window.experiments = {};
    if (!window.games) window.games = {};

    function initBinder() {
        window.servers.get = function () {
            if (DEV_ENVIRONMENT) return [
                { host: "0.0.0.0", name: "Debug server", description: "Just a server meant for debugging", id: uuid.v4() },
                { host: "0.0.0.0", name: "Developer Server", description: "Server meant for testing features", id: uuid.v4() },
                { host: "0.0.0.0", name: "Public Server", description: "The official public server", id: uuid.v4() }
            ]

            return sentinel.servers.get();
        }

        window.servers.save = function (servers) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.servers.save(servers);
        }

        window.experiments.get = function () {
            if (DEV_ENVIRONMENT) return [
                {
                    id: "EXPERIMENT_LEGACY_INVENTORY_SUPPORT",
                    display: "1.x/2.x inventory enhancements",
                    state: false
                },
                {
                    id: "EXPERIMENT_ACHIEVEMENTSV1_SUPPORT",
                    display: "Support for V1 achievement system (gameplay rewards)",
                    state: false
                },
                {
                    id: "EXPERIMENT_MMO_SERVER_SUPPORT",
                    display: "Multiplayer Grid support (EXTREMELY WIP)",
                    state: false
                }
            ]
            
            return sentinel.experiments.get();
        }

        window.experiments.save = function (experiments) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.experiments.save(experiments);
        }

        window.games.setCurrentEmulationSoftware = function (software) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.games.setCurrentEmulationSoftware(software);
        }

        window.games.getCurrentEmulationSoftware = function () {
            if (DEV_ENVIRONMENT) return window.games.getEmulationSoftwares()[0];
            return sentinel.games.getCurrentEmulationSoftware();
        }

        window.games.getEmulationSoftwares = function () {
            if (DEV_ENVIRONMENT) return [{ name: "Project Edge", id: "projectedge" }, { name: "SoDOff", id: "sodoff" }];
            return sentinel.games.getEmulationSoftware();
        }

        window.localization.init();
        if (!loaded) setLoaded(true);
    }

    if (DEV_ENVIRONMENT) initBinder();

    window.servers.sentinelInit = () => {
        initBinder();
    }

    return [loaded];
}