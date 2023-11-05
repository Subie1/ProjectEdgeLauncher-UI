import { useState } from "react";

export default function useBinder(DEV_ENVIRONMENT = false) {
    const [loaded, setLoaded] = useState(false);

    window.servers = {};

    function initBinder() {
        window.servers.getServers = function () {
            if (DEV_ENVIRONMENT) return [{ host: "127.0.0.1", name: "Debug server", description: "Just a server meant for debugging" }, { host: "127.0.0.1", name: "Developer Server", description: "Developer only server" }, { host: "127.0.0.1", name: "Public Server", description: "Public Server for everyone" }];
            return sentinel.getServers();
        }

        window.servers.getExperiments = function () {
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
            
            return sentinel.getExperiments();
        }

        window.servers.getEmulationSoftwarePackages = function () {
            if (DEV_ENVIRONMENT) return [{ name: "Project Edge", id: "projectedge" }, { name: "SoDOff", id: "sodoff" }];
            return sentinel.getEmulationSoftwarePackages();
        }

        window.servers.saveExperiments = function (experiments) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.saveExperiments(experiments);
        }

        window.servers.saveServers = function (servers) {
            if (DEV_ENVIRONMENT) return;
            return sentinel.saveServers(servers);
        }

        if (!loaded) setLoaded(true);
    }

    if (DEV_ENVIRONMENT) initBinder();

    window.servers.sentinelInit = () => {
        initBinder();
    }

    return [loaded];
}